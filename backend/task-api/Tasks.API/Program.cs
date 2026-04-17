using dotenv.net;
using NLog;
using NLog.Web;
using Npgsql;
using System.Data;
using System.Text.Json;
using Tasks.Application.Interfaces;
using Tasks.Application.Response;
using Tasks.Infrastructure.Repositories;

if (File.Exists(".env"))
{
    DotEnv.Fluent().WithExceptions().WithoutOverwriteExistingVars().Load();
}

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

GlobalDiagnosticsContext.Set("ConnectionString", connectionString);
GlobalDiagnosticsContext.Set("AppName", builder.Configuration["App:Name"] ?? "Tasks.API");
GlobalDiagnosticsContext.Set("Script", builder.Configuration["Nlog:Script"] ?? "");

builder.Logging.ClearProviders();
builder.Host.UseNLog();

var logger = LogManager.GetCurrentClassLogger();

try
{
    logger.Info("NLog configurado correctamente");

    builder.Services.AddScoped<IDbConnection>(sp =>
    {
        var config = sp.GetRequiredService<IConfiguration>();
        var connStr = config.GetConnectionString("DefaultConnection");

        if (string.IsNullOrEmpty(connStr))
            throw new Exception("Connection string 'DefaultConnection' no está configurada.");

        return new NpgsqlConnection(connStr);
    });

    builder.Services.AddScoped<ITaskRepository, TaskRepository>();

    builder.Services.AddMediatR(cfg =>
        cfg.RegisterServicesFromAssembly(typeof(ITaskRepository).Assembly)
    );


    builder.Services.AddControllers()
        .AddJsonOptions(options =>
        {
            options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        });

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    builder.Services.AddCors(options =>
    {
        options.AddPolicy("CorsPolicy", policy =>
        {
            policy
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
    });


    var app = builder.Build();

    app.UseExceptionHandler(errorApp =>
    {
        errorApp.Run(async context =>
        {
            var exceptionHandler = context.Features.Get<Microsoft.AspNetCore.Diagnostics.IExceptionHandlerFeature>();
            var ex = exceptionHandler?.Error;

            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            context.Response.ContentType = "application/json";

            var response = new ResponseApp<object>(
                StatusCodes.Status500InternalServerError,
                ex?.Message ?? "Error inesperado",
                null
            );

            await context.Response.WriteAsJsonAsync(response);
        });
    });

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseCors("CorsPolicy");

    app.UseAuthorization();

    app.MapControllers();

    app.Run();
}
catch (Exception ex)
{
    logger.Error(ex, "Stopped program because of exception");
    throw;
}
finally
{
    LogManager.Shutdown();
}
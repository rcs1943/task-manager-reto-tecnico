using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Data;
using Tasks.Application.DTOs;
using Tasks.Application.Interfaces;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Tasks.Infrastructure.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly IDbConnection _connection;


        public TaskRepository(IDbConnection connection)
        {
            _connection = connection;
        }

        public async Task<List<TaskDto>> GetTasksAsync(int? statusId, int? priorityId)
        {
            var parameters = new DynamicParameters();
            parameters.Add("p_status_id", statusId);
            parameters.Add("p_priority_id", priorityId);

            var result = await _connection.QueryAsync<TaskDto>(
                "SELECT * FROM public.\"SP_Task_GetAll\"(@p_status_id, @p_priority_id)",
                parameters
            );

            return result.ToList();
        }

        public async Task<TaskDetailDto?> GetTaskByIdAsync(int taskId)
        {

            var parameters = new DynamicParameters();
            parameters.Add("p_task_id", taskId);

            var result = await _connection.QueryFirstOrDefaultAsync<TaskDetailDto>(
                "SELECT * FROM public.\"SP_Task_GetById\"(@p_task_id)",
                parameters
            );

            return result;
        }
    }
}

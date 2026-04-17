using MediatR;
using Tasks.Application.DTOs;

namespace Tasks.Application.Features.Operaciones.Tasks.Queries.GetTasksByIdQuery
{
    public class GetTaskByIdQuery : IRequest<TaskDetailDto?>
    {
        public int TaskId { get; set; }
    }
}

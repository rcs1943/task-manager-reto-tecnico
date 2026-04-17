using MediatR;
using Tasks.Application.DTOs;

namespace Tasks.Application.Features.Operaciones.Tasks.Queries.GetTasksQuerys
{
    public class GetTasksQuery : IRequest<List<TaskDto>>
    {
        public int? StatusId { get; set; }
        public int? PriorityId { get; set; }
    }
}

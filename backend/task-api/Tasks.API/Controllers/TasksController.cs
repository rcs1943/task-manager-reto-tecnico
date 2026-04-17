
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Tasks.Application.DTOs;
using Tasks.Application.Features.Operaciones.Tasks.Queries.GetTasksQuerys;
using Tasks.Application.Interfaces;
using Tasks.Application.Response;

namespace Tasks.API.Controllers
{
    [Route("api/Tasks/")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        #region Variables
        private readonly ITaskRepository _repository;
        private IMediator _mediator;

        #endregion

        #region Constructor
        public TasksController(ITaskRepository repository, IMediator mediator)
        {
            _repository = repository;
            _mediator = mediator;

        }
        #endregion

        #region Methods

        [HttpGet]
        public async Task<IActionResult> GetTasks([FromQuery] int? statusId, [FromQuery] int? priorityId)
        {
            var result = await _mediator.Send(new GetTasksQuery
            {
                StatusId = statusId,
                PriorityId = priorityId
            });

            return Ok(new ResponseApp<List<TaskDto>>(result));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskById(int id)
        {
            var task = await _repository.GetTaskByIdAsync(id);

            if (task == null)
            {
                return NotFound(new ResponseApp<string>(
                     StatusCodes.Status404NotFound,
                    "Tarea no encontrada",
                    null
                ));
            }

            return Ok(new ResponseApp<TaskDetailDto>(task));
        }

        #endregion
    }
}

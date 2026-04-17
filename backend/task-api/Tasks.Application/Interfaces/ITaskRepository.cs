using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tasks.Application.DTOs;

namespace Tasks.Application.Interfaces
{
    public interface ITaskRepository
    {
        Task<List<TaskDto>> GetTasksAsync(int? statusId, int? priorityId);

        Task<TaskDetailDto?> GetTaskByIdAsync(int taskId);
    }
}

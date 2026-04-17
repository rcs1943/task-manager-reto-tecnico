using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tasks.Application.DTOs
{
    public class TaskDto
    {
        public int TaskId { get; set; }
        public string Title { get; set; } = null!;
        public string? Description { get; set; }

        public int PriorityId { get; set; }
        public string PriorityName { get; set; } = null!;

        public int StatusId { get; set; }
        public string StatusName { get; set; } = null!;

        public DateTime CreatedAt { get; set; }
    }
}

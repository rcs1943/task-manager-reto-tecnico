import { create } from "zustand";
import { Task } from "../entities/Task";
import { Priority, Status } from "@/shared/types/TaskIndicators";

type Filters = {
  priority: Priority[];
  status: Status[];
};

interface TaskStore {
  tasks: Task[];
  filters: Filters;
  setTasks: (tasks: Task[]) => void;
  setPriority: (priority: Priority) => void;
  setStatus: (status: Status) => void;
  getFilteredTasks: () => Task[];
  getTaskById: (id: string) => Task | undefined;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  filters: {
    priority: [],
    status: [],
  },

  setTasks: tasks => set({ tasks }),

  setPriority: priority =>
    set(state => {
      const exists = state.filters.priority.includes(priority);

      return {
        filters: {
          ...state.filters,
          priority: exists
            ? state.filters.priority.filter(p => p !== priority) // Si existe remuevo
            : [...state.filters.priority, priority], // Si no existe lo agrego
        },
      };
    }),

  setStatus: status =>
    set(state => {
      const exists = state.filters.status.includes(status);

      return {
        filters: {
          ...state.filters,
          status: exists
            ? state.filters.status.filter(s => s !== status) // Si existe remuevo
            : [...state.filters.status, status], // Si no existe lo agrego
        },
      };
    }),

  getFilteredTasks: () => {
    const { tasks, filters } = get();

    return tasks.filter(({ priority, status }) => {
      const matchPriority =
        filters.priority.length === 0 || filters.priority.includes(priority); // Si no hay filtro o el filtro coincide

      const matchStatus =
        filters.status.length === 0 || filters.status.includes(status); // Si no hay filtro o el filtro coincide

      return matchPriority && matchStatus;
    });
  },

  getTaskById: (id: string) => get().tasks.find(t => t.id.toString() === id),
}));

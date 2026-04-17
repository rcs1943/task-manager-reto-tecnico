//#region Libraries
import { create } from "zustand";
//#endregion
//#region Types
import { Task } from "../../entities/Task";
import { Priority, Status } from "@/shared/types/TaskIndicators";
//#endregion

type Filter = {
  id: number;
  name: Priority | Status | null;
};

type TaskFilters = {
  status: Filter | null;
  priority: Filter | null;
};

interface TaskStore {
  tasks: Task[];
  filters: TaskFilters;
  setTasks: (tasks: Task[]) => void;
  getTasks: () => Task[];
  setStatus: (status: Filter) => void;
  setPriority: (priority: Filter) => void;
  getFilteredTasks: () => Task[];
  getTaskById: (id: string) => Task | undefined;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  filters: {
    priority: null,
    status: null,
  },

  setTasks: tasks => set({ tasks }),

  getTasks: () => get().tasks,

  setStatus: status =>
    set(state => ({
      filters: {
        ...state.filters,
        status: state.filters.status?.id === status.id ? null : status,
      },
    })),

  setPriority: priority =>
    set(state => ({
      filters: {
        ...state.filters,
        priority: state.filters.priority?.id === priority.id ? null : priority,
      },
    })),

  getFilteredTasks: () => {
    const { tasks, filters } = get();
    return tasks.filter(task => {
      if (filters.priority && task.priority !== filters.priority) return false;
      if (filters.status && task.status !== filters.status) return false;
      return true;
    });
  },

  getTaskById: (id: string) => get().tasks.find(t => t.id.toString() === id),
}));

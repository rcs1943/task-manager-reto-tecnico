//#region Types
import { Task } from "../../entities/Task";
//#endregion
//#region Utils
import { GetTasksResponseData } from "../../TasksRepository";
//#endregion

export const PRIORITY_MAP: Record<number, Task["priority"]["name"]> = {
  1: "high",
  2: "medium",
  3: "low",
};

export const STATUS_MAP: Record<number, Task["status"]["name"]> = {
  1: "pending",
  2: "inProgress",
  3: "completed",
};

export const getTasksAdapter = (data: GetTasksResponseData[]): Task[] => {
  return data.map(task => ({
    id: task.taskId,
    title: task.title,
    description: task.description,
    priority: {
      id: task.priorityId,
      name: PRIORITY_MAP[task.priorityId] ?? "low",
    },
    status: {
      id: task.statusId,
      name: STATUS_MAP[task.statusId] ?? "pending",
    },
  }));
};

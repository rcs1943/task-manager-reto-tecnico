//#region Types
import { Task } from "../../entities/Task";
import { GetTasksResponseData } from "../../TasksRepository";
//#endregion
//#region Utils
import {
  PRIORITY_MAP,
  STATUS_MAP,
} from "../../task-list/adapters/getTasksAdapter";
//#endregion

export const getTaskAdapter = (data: GetTasksResponseData): Task => {
  return {
    id: data.taskId,
    title: data.title,
    description: data.description,
    priority: {
      id: data.priorityId,
      name: PRIORITY_MAP[data.priorityId] ?? "low",
    },
    status: {
      id: data.statusId,
      name: STATUS_MAP[data.statusId] ?? "pending",
    },
  };
};

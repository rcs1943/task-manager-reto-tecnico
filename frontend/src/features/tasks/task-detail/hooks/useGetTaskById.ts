//#region Libraries
import { useEffect, useState } from "react";
//#endregion
//#region Types
import { Task } from "../../entities/Task";
//#endregion
//#region Utils
import { TASKS_REPOSITORY } from "../../implementations";
import { getTaskAdapter } from "../adapters/getTaskAdapter";
//#endregion

type GetTaskByIdHook = { task: Task | null; isLoading: boolean };

export function useGetTaskById(taskId: number): GetTaskByIdHook {
  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!taskId) return;

    getTaskById(taskId);
  }, [taskId]);

  async function getTaskById(taskId: number) {
    setIsLoading(true);
    const { message, data } = await TASKS_REPOSITORY.getTaskById(taskId);

    setIsLoading(false);

    if (!data || message !== "OK") {
      alert("Ocurrió un error inesperado");
      return;
    }
    const adaptedTask = getTaskAdapter(data);

    setTask(adaptedTask);
  }
  return { task, isLoading };
}

//#region Libraries
import { useEffect, useState } from "react";
//#endregion
//#region Hooks
import { useTaskStore } from "../stores/taskStore";
//#endregion
//#region Utils
import { getTasksAdapter } from "../adapters/getTasksAdapter";
import { TASKS_REPOSITORY } from "../../implementations";
//#endregion

type TasksHook = { isLoading: boolean };

export function useLoadTasks(): TasksHook {
  const filters = useTaskStore(s => s.filters);
  const setTasks = useTaskStore(s => s.setTasks);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    loadTasks();
  }, [filters.priority, filters.status]);

  async function loadTasks() {
    setIsLoading(true);
    const { message, data } = await TASKS_REPOSITORY.getTasks({
      statusId: filters.status?.id ?? null,
      priorityId: filters.priority?.id ?? null,
    });

    setIsLoading(false);

    if (!data || message !== "OK") {
      alert("Ocurrió un error inesperado");
      return;
    }
    const adaptedTasks = getTasksAdapter(data);
    setTasks(adaptedTasks);
  }
  return { isLoading };
}

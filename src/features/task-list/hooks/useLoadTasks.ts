import { useEffect, useState } from "react";
import { TASKS_REPOSITORY } from "../implementations";
import { useTaskStore } from "../stores/taskStore";

type TasksHook = { isLoading: boolean };

export function useLoadTasks(): TasksHook {
  const taskStore = useTaskStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    setIsLoading(true);
    const { message, data } = await TASKS_REPOSITORY.getTasks();

    setIsLoading(false);

    if (!data || message !== "SUCCESS") {
      alert("Ocurrió un error inesperado");
      return;
    }

    taskStore.setTasks(data.tasks);
  }
  return { isLoading };
}

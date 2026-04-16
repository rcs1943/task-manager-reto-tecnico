import { useEffect, useState } from "react";
import { TASKS_REPOSITORY } from "../implementations";

type TasksHook = { data: any[]; isLoading: boolean };

export function useLines(): TasksHook {
  const [tasks, setTasks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getLines();
  }, []);

  async function getLines() {
    setIsLoading(true);
    const { message, data } = await TASKS_REPOSITORY.getTasks();

    setIsLoading(false);

    if (!data || message !== "SUCCESS") {
      alert("Ocurrió un error inesperado");
      return;
    }

    setTasks(data.tasks);
  }
  return { data: tasks, isLoading };
}

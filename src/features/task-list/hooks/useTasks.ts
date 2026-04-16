import { useEffect, useState } from "react";
import { TASKS_REPOSITORY } from "../implementations";
import { Task } from "../entities/Task";

type TasksHook = { data: Task[]; isLoading: boolean };

export function useTasks(): TasksHook {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // getTasks();
  }, []);

  async function getTasks() {
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

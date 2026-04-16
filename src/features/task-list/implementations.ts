import AxiosLinesRepository from "./axios/AxiosTasksRepository";
import TasksRepository from "./TasksRepository";

export const TASKS_REPOSITORY: TasksRepository = new AxiosLinesRepository();

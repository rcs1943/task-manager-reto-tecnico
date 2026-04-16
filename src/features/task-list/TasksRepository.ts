import ApiResponse from "@/shared/axios/ApiResponse";
import { Task } from "./entities/Task";

export type GetTasksResponseData = {
  tasks: Task[];
};

export default interface TasksRepository {
  getTasks(): Promise<ApiResponse<GetTasksResponseData>>;
}

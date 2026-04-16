import { tasksApi } from "@/shared/axios/api";
import ApiResponse from "@/shared/axios/ApiResponse";
import TasksRepository, { GetTasksResponseData } from "../TasksRepository";

export default class AxiosTasksRepository implements TasksRepository {
  async getTasks(): Promise<ApiResponse<GetTasksResponseData>> {
    const response = await tasksApi.get(`/tasks`);
    return response.data;
  }
}

import { tasksApi } from "@/shared/axios/api";
import ApiResponse from "@/shared/axios/ApiResponse";
import TasksRepository, { GetTasksResponseData } from "../TasksRepository";

export default class AxiosTasksRepository implements TasksRepository {
  async getTasks(filters?: {
    statusId: number | null;
    priorityId: number | null;
  }): Promise<ApiResponse<GetTasksResponseData[]>> {
    const response = await tasksApi.get(`/api/tasks`, {
      params: filters,
    });
    return response.data;
  }

  async getTaskById(
    taskId: number
  ): Promise<ApiResponse<GetTasksResponseData>> {
    const response = await tasksApi.get(`/api/tasks/${taskId}`);
    return response.data;
  }
}

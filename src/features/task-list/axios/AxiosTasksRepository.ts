import { tasksApi } from "@/shared/axios/api";
import ApiResponse from "@/shared/axios/ApiResponse";
import TasksRepository from "../TasksRepository";

export default class AxiosLinesRepository implements TasksRepository {
  async getTasks(): Promise<ApiResponse<any>> {
    const response = await tasksApi.get(`/tasks`);
    return response.data;
  }
}

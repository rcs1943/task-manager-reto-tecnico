import ApiResponse from "@/shared/axios/ApiResponse";

export type GetTasksResponseData = {
  tasks: any[];
};

export default interface TasksRepository {
  getTasks(): Promise<ApiResponse<GetTasksResponseData>>;
}

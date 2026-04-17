import ApiResponse from "@/shared/axios/ApiResponse";

export type GetTasksResponseData = {
  createdAt: string;
  description: string;
  priorityId: number;
  priorityName: string;
  statusId: number;
  statusName: string;
  taskId: number;
  title: string;
};

export default interface TasksRepository {
  getTasks(filters?: {
    statusId: number | null;
    priorityId: number | null;
  }): Promise<ApiResponse<GetTasksResponseData[]>>;

  getTaskById(taskId: number): Promise<ApiResponse<GetTasksResponseData>>;
}

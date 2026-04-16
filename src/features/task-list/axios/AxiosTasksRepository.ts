import { tasksApi } from "@/shared/axios/api";
import ApiResponse from "@/shared/axios/ApiResponse";
import TasksRepository, { GetTasksResponseData } from "../TasksRepository";

const MOCK: ApiResponse<GetTasksResponseData> = {
  message: "SUCCESS",
  data: {
    tasks: [
      {
        id: 1,
        title: "Comprar leche",
        description: "Comprar leche para el desayuno de mañana.",
        priority: "high",
        status: "pending",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin elementum ante nec congue. Nulla facilisi. Aenean accumsan mollis est, eu iaculis libero malesuada vel. Mauris sed justo venenatis dui feugiat porta. Nam rutrum metus ac erat tempus ullamcorper. Nam posuere, magna non feugiat blandit, arcu dui blandit urna, id pulvinar dolor odio in est. Nulla pulvinar diam eget purus porttitor, sit amet gravida ipsum lobortis. Donec ac dolor eu dui fermentum porta. Quisque nec est sapien. Aenean non odio efficitur, mollis tellus vel, lobortis mauris.",
      },
      {
        id: 2,
        title: "Comprar pan",
        description: "Comprar pan para el desayuno de mañana.",
        priority: "medium",
        status: "completed",
        paragraph:
          "Aenean malesuada, enim sed sodales rutrum, nulla sapien blandit lorem, quis congue elit justo dapibus dolor. Nulla gravida, tellus et sodales commodo, lorem nibh scelerisque urna, eu mattis magna dolor a leo. Curabitur pellentesque, mi dapibus fringilla venenatis, lorem felis dictum erat, a consectetur turpis leo in massa. Morbi convallis orci sit amet dolor suscipit, in mollis nibh pretium. Duis efficitur ornare enim et pretium. Etiam sollicitudin commodo ex sed imperdiet.",
      },
      {
        id: 3,
        title: "Comprar tocino",
        description: "Comprar tocino para el desayuno de mañana.",
        priority: "low",
        status: "pending",
        paragraph:
          "Aenean in augue eu sapien varius porta vel et eros. Aliquam quis facilisis arcu. Vestibulum blandit pulvinar ante ut pretium. Vivamus luctus, velit vel semper suscipit, risus sem vehicula ex, sed sodales purus metus a erat. Praesent ultrices tortor sed blandit interdum. In hac habitasse platea dictumst. Integer vestibulum facilisis porttitor.",
      },
    ],
  },
};

export default class AxiosTasksRepository implements TasksRepository {
  async getTasks(): Promise<ApiResponse<GetTasksResponseData>> {
    // const response = await tasksApi.get(`/tasks`);
    const response = MOCK;
    return response;
  }
}

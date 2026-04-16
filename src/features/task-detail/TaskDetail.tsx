import MainScreen from "@/shared/layout/main-screen/MainScreen";
import { ScrollView, Text } from "react-native";
import TaskIndicators from "./components/task-indicators/TaskIndicators";
import { useTaskStore } from "../task-list/stores/taskStore";

interface Props {
  taskId: string | string[];
}

const TaskDetail = ({ taskId }: Props) => {
  const taskStore = useTaskStore();

  const currentTask = taskStore.getTaskById(taskId.toString());

  return (
    <MainScreen>
      <Text className="text-7xl font-medium text-headerColor">
        {currentTask?.title}
      </Text>
      <TaskIndicators
        priority={currentTask!.priority}
        status={currentTask!.status}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-textColor text-xl leading-10">
          {currentTask?.paragraph}
        </Text>
      </ScrollView>
    </MainScreen>
  );
};

export default TaskDetail;

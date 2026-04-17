//#region Libraries
import { ActivityIndicator, ScrollView, Text } from "react-native";
//#endregion
//#region Components
import MainScreen from "@/shared/layout/main-screen/MainScreen";
import TaskIndicators from "./components/task-indicators/TaskIndicators";
//#endregion
//#region Hooks
import { useGetTaskById } from "./hooks/useGetTaskById";
//#endregion
//#region Types
import { Priority, Status } from "@/shared/types/TaskIndicators";
//#endregion

interface Props {
  taskId: number;
}

const TaskDetail = ({ taskId }: Props) => {
  const { task, isLoading } = useGetTaskById(taskId as number);
  return (
    <MainScreen>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          {task ? (
            <>
              {" "}
              <Text className="text-7xl font-medium text-headerColor">
                {task?.title}
              </Text>
              <TaskIndicators
                priority={task.priority.name as Priority}
                status={task.status.name as Status}
              />
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="text-textColor text-xl leading-10">
                  {task.description}
                </Text>
              </ScrollView>
            </>
          ) : (
            <Text className="text-7xl font-medium text-headerColor">
              Tarea no encontrada
            </Text>
          )}
        </>
      )}
    </MainScreen>
  );
};

export default TaskDetail;

//#region Libraries
import MainScreen from "@/shared/layout/main-screen/MainScreen";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";
//#endregion
//#region Components
import PriorityFilter from "./components/priority-filter/PriorityFilter";
import StatusFilter from "./components/status-filter/StatusFilter";
import TaskCard from "./components/task-card/TaskCard";
//#endregion
//#region Hooks
import { useLoadTasks } from "./hooks/useLoadTasks";
import { useTaskStore } from "./stores/taskStore";
//#endregion
//#region Types
import { Priority, Status } from "@/shared/types/TaskIndicators";
//#endregion

const TaskList = () => {
  const { isLoading } = useLoadTasks();

  const taskStore = useTaskStore();

  const tasks = taskStore.getTasks();

  return (
    <MainScreen>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <Text className="text-7xl leading-[72px] pt-6 font-medium text-headerColor">
            {tasks.length} tareas restantes.
          </Text>
          <View className="gap-6">
            <StatusFilter
              value={taskStore.filters.status}
              onChange={taskStore.setStatus}
            />
            <PriorityFilter
              value={taskStore.filters.priority}
              onChange={taskStore.setPriority}
            />
          </View>
          <FlatList
            data={tasks}
            keyExtractor={task => task.id.toString()}
            contentContainerStyle={{ gap: 30 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Link asChild href={`/tasks/${item.id}`}>
                <Pressable>
                  <TaskCard
                    title={item.title}
                    description={item.description}
                    priority={item.priority.name as Priority}
                    status={item.status.name as Status}
                  />
                </Pressable>
              </Link>
            )}
          />
        </>
      )}
    </MainScreen>
  );
};

export default TaskList;

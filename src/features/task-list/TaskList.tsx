import MainScreen from "@/shared/layout/main-screen/MainScreen";
import { FlatList, Pressable, Text, View } from "react-native";
import PriorityFilter from "./components/priority-filter/PriorityFilter";
import StatusFilter from "./components/status-filter/StatusFilter";
import TaskCard from "./components/task-card/TaskCard";
import { Link } from "expo-router";
import { useLoadTasks } from "./hooks/useLoadTasks";
import { useTaskStore } from "./stores/taskStore";

const TaskList = () => {
  const { isLoading } = useLoadTasks();

  const taskStore = useTaskStore();

  const tasks = taskStore.getFilteredTasks();

  return (
    <MainScreen>
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
                priority={item.priority}
                status={item.status}
              />
            </Pressable>
          </Link>
        )}
      />
    </MainScreen>
  );
};

export default TaskList;

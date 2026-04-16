import MainScreen from "@/shared/layout/main-screen/MainScreen";
import { FlatList, Pressable, Text, View } from "react-native";
import PriorityFilter from "./components/priority-filter/PriorityFilter";
import StatusFilter from "./components/status-filter/StatusFilter";
import TaskCard from "./components/task-card/TaskCard";
import { Link } from "expo-router";

interface Mock {
  id: number;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "completed";
}

const MOCK: Mock[] = [
  {
    id: 1,
    title: "Comprar leche",
    description: "Comprar leche para el desayuno de mañana.",
    priority: "high",
    status: "pending",
  },
  {
    id: 2,
    title: "Comprar leche",
    description: "Comprar leche para el desayuno de mañana.",
    priority: "medium",
    status: "completed",
  },
  {
    id: 3,
    title: "Comprar leche",
    description: "Comprar leche para el desayuno de mañana.",
    priority: "low",
    status: "pending",
  },
];

const TaskList = () => {
  return (
    <MainScreen>
      <Text className="text-7xl leading-[72px] pt-6 font-medium text-headerColor">
        12 tareas restantes.
      </Text>
      <View className="gap-6">
        <StatusFilter />
        <PriorityFilter />
      </View>
      <FlatList
        data={MOCK}
        keyExtractor={task => task.id.toString()}
        contentContainerStyle={{ gap: 30 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Link asChild href={"tasks/2"}>
            <Pressable
              onPress={() =>
                console.log(`Ir a la tarea ${item.id} ${item.title}`)
              }
            >
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

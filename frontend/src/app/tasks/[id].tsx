import { Stack, useLocalSearchParams } from "expo-router";
import TaskDetail from "@/features/tasks/task-detail/TaskDetail";

export default () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <TaskDetail taskId={Number(id)} />
    </>
  );
};

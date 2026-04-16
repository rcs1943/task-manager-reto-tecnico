import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import TaskDetail from "@/features/task-detail/TaskDetail";

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
      <TaskDetail taskId={id} />
    </>
  );
};

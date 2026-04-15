import TaskList from "@/features/task-list/TaskList";
import { Stack } from "expo-router";

export default () => (
  <>
    <Stack.Screen options={{ headerShown: false }} />
    <TaskList />;
  </>
);

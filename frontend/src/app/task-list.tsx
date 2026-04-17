import TaskList from "@/features/tasks/task-list/TaskList";
import { Stack } from "expo-router";

export default () => (
  <>
    <Stack.Screen options={{ headerShown: false }} />
    <TaskList />
  </>
);

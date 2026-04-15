import MainScreen from "@/shared/layout/main-screen/MainScreen";
import { Text } from "react-native";

const TaskList = () => {
  return (
    <MainScreen>
      <Text className="text-7xl pt-6 font-medium">12 Tasks Remaining.</Text>
    </MainScreen>
  );
};

export default TaskList;

//#region Libraries
import { View } from "react-native";
//#endregion
//#region Components
import Indicator from "./components/Indicator/Indicator";
//#endregion
//#region Types
//#endregion
//#region Utils
//#endregion
import { Priority, Status } from "@/shared/types/TaskIndicators";
import { priorityColors, statusColors } from "./utils/TaskIndicatorConfig";

interface Props {
  priority: Priority;
  status: Status;
}

const TaskIndicators = ({ priority, status }: Props) => {
  const priorityCfg = priorityColors[priority];
  const statusCfg = statusColors[status];
  return (
    <View className="flex flex-row justify-between">
      <Indicator {...priorityCfg} label={`PRIORIDAD: ${priorityCfg.label}`} />
      <Indicator {...statusCfg} label={`ESTADO: ${statusCfg.label}`} />
    </View>
  );
};

export default TaskIndicators;

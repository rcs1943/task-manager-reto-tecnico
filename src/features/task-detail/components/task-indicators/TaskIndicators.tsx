import { View } from "react-native";
import Indicator from "./components/Indicator/indicator";
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

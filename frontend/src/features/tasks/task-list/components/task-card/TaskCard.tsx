//#region Libraries
import { Text, View } from "react-native";
//#endregion
//#region Components
import CustomLabel from "@/shared/components/custom-label/CustomLabel";
//#endregion
//#region Types
import { Priority, Status } from "@/shared/types/TaskIndicators";
//#endregion
//#region Utils
import {
  LabelConfig,
  priorityConfig,
  statusConfig,
} from "./utils/TaskCardConfig";
//#endregion

interface Props {
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}

const TaskCard = ({ title, description, priority, status }: Props) => {
  const priorityCfg = priorityConfig[priority];
  const statusCfg = statusConfig[status];

  const getLabelProps = (config: LabelConfig) => {
    return {
      content: config.label,
      styles: {
        container: { backgroundColor: config.bg },
        text: { color: config.text },
      },
    };
  };

  return (
    <View className="flex flex-col gap-4 bg-background py-8 px-8 rounded-lg">
      <View className="flex flex-row justify-between">
        <CustomLabel {...getLabelProps(priorityCfg)} />
        <CustomLabel {...getLabelProps(statusCfg)} />
      </View>
      <Text className="text-headerColor font-bold text-4xl mt-4">{title}</Text>
      <Text className="text-textColor text-xl">{description}</Text>
    </View>
  );
};

export default TaskCard;

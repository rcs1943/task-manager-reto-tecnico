//#region Libraries
import { Pressable, ScrollView, Text, View } from "react-native";
//#endregion
//#region Components
import CustomLabel from "@/shared/components/custom-label/CustomLabel";
import { Filter, Status } from "@/shared/types/TaskIndicators";
//#endregion

interface StatusLabel {
  id: number;
  name: Status;
  content: string;
}

interface Props {
  value: Filter | null;
  onChange: (status: Filter) => void;
}

const StatusFilter = ({ value, onChange }: Props) => {
  const STATUSES: StatusLabel[] = [
    {
      id: 1,
      name: "pending",
      content: "PENDIENTE",
    },
    {
      id: 2,
      name: "inProgress",
      content: "EN CURSO",
    },
    {
      id: 3,
      name: "completed",
      content: "COMPLETADO",
    },
  ];

  const handleStatus = (status: { id: number; name: Status }) => {
    onChange(status);
  };

  return (
    <View className="flex flex-row items-center gap-6">
      <Text className="text-[#C4C6D6] font-medium text-sm">ESTADO</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
      >
        {STATUSES.map(status => (
          <Pressable onPress={() => handleStatus(status)} key={status.id}>
            <CustomLabel
              key={status.id}
              content={status.content}
              active={status.name === value?.name}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default StatusFilter;

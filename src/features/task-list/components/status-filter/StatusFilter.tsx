import CustomLabel from "@/shared/components/custom-label/CustomLabel";
import { Status } from "@/shared/types/TaskIndicators";
import { Pressable, ScrollView, Text, View } from "react-native";

interface StatusLabel {
  id: Status;
  content: string;
}

interface Props {
  value: Status[];
  onChange: (status: Status) => void;
}

const StatusFilter = ({ value, onChange }: Props) => {
  const STATUSES: StatusLabel[] = [
    {
      id: "pending",
      content: "PENDIENTE",
    },
    {
      id: "completed",
      content: "COMPLETADO",
    },
  ];

  const handleStatus = (status: Status) => {
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
          <Pressable onPress={() => handleStatus(status.id)} key={status.id}>
            <CustomLabel
              key={status.id}
              content={status.content}
              active={value.includes(status.id)}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default StatusFilter;

import CustomLabel from "@/shared/components/custom-label/CustomLabel";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

interface Status {
  id: "all" | "pending" | "completed";
  content: string;
}

const StatusFilter = () => {
  const [statusFilter, setStatusFilter] = useState<
    "all" | "pending" | "completed" | null
  >("all");

  const STATUSES: Status[] = [
    {
      id: "all",
      content: "TODO",
    },
    {
      id: "pending",
      content: "PENDIENTE",
    },
    {
      id: "completed",
      content: "COMPLETADO",
    },
  ];

  const handleStatus = (status: "all" | "pending" | "completed") => {
    setStatusFilter(status);
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
              active={status.id === statusFilter}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default StatusFilter;

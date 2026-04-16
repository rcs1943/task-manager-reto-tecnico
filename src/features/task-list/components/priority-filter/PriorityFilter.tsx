import CustomLabel from "@/shared/components/custom-label/CustomLabel";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

interface Priority {
  id: "high" | "medium" | "low";
  content: string;
}

const PriorityFilter = () => {
  const [priorityFilter, setPriorityFilter] = useState<
    "high" | "medium" | "low" | null
  >(null);

  const PRIORITIES: Priority[] = [
    {
      id: "high",
      content: "ALTA",
    },
    {
      id: "medium",
      content: "MEDIA",
    },
    {
      id: "low",
      content: "BAJA",
    },
  ];

  const handlePriority = (priority: "high" | "medium" | "low") => {
    setPriorityFilter(priority);
  };

  return (
    <View className="flex flex-row items-center gap-6">
      <Text className="text-[#C4C6D6] font-medium text-sm">PRIORIDAD</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
      >
        {PRIORITIES.map(priority => (
          <Pressable
            onPress={() => handlePriority(priority.id)}
            key={priority.id}
          >
            <CustomLabel
              key={priority.id}
              content={priority.content}
              active={priority.id === priorityFilter}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default PriorityFilter;

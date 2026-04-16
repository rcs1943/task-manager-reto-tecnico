import CustomLabel from "@/shared/components/custom-label/CustomLabel";
import { Priority } from "@/shared/types/TaskIndicators";
import { Pressable, ScrollView, Text, View } from "react-native";

interface PriorityLabel {
  id: Priority;
  content: string;
}

interface Props {
  value: Priority[];
  onChange: (priority: Priority) => void;
}

const PriorityFilter = ({ value, onChange }: Props) => {
  const PRIORITIES: PriorityLabel[] = [
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

  const handlePriority = (priority: Priority) => {
    onChange(priority);
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
              active={value.includes(priority.id)}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default PriorityFilter;

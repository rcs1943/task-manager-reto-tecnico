//#region Libraries
import { Pressable, ScrollView, Text, View } from "react-native";
//#endregion
//#region Components
import CustomLabel from "@/shared/components/custom-label/CustomLabel";
//#endregion
//#region Types
import { Filter, Priority } from "@/shared/types/TaskIndicators";
//#endregion

interface PriorityLabel {
  id: number;
  name: Priority;
  content: string;
}

interface Props {
  value: Filter | null;
  onChange: (priority: Filter) => void;
}

const PriorityFilter = ({ value, onChange }: Props) => {
  const PRIORITIES: PriorityLabel[] = [
    {
      id: 1,
      name: "high",
      content: "ALTA",
    },
    {
      id: 2,
      name: "medium",
      content: "MEDIA",
    },
    {
      id: 3,
      name: "low",
      content: "BAJA",
    },
  ];

  const handlePriority = (priority: { id: number; name: Priority }) => {
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
          <Pressable onPress={() => handlePriority(priority)} key={priority.id}>
            <CustomLabel
              key={priority.id}
              content={priority.content}
              active={priority.name === value?.name}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default PriorityFilter;

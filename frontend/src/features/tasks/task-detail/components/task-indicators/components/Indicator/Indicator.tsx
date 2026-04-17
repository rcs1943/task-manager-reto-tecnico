import { View, Text } from "react-native";

interface IndicatorProps {
  color: string;
  label: string;
}

const Indicator = ({ color, label }: IndicatorProps) => {
  return (
    <View className="flex flex-row items-center gap-3">
      <View
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <Text className="font-semibold" style={{ color }}>
        {label}
      </Text>
    </View>
  );
};

export default Indicator;

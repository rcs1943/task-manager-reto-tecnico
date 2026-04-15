import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TaskDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Detalle de tarea {id}</Text>
    </View>
  );
}

import { Text, TextStyle, View, ViewStyle } from "react-native";

interface Label {
  container?: ViewStyle;
  text?: TextStyle;
}

interface Props {
  content: string | number;
  styles?: Label;
  active?: boolean;
}

const CustomLabel = ({
  content,
  styles = {
    container: {},
    text: {},
  },
  active = false,
}: Props) => {
  return (
    <View
      style={styles.container}
      className={`py-1 px-4 rounded-xl ${
        active ? "bg-primary" : "bg-secondaryBackground"
      }`}
    >
      <Text
        style={styles.text}
        className={`font-medium text-[15px] ${
          active ? "text-[#F5F6FA]" : "text-[#5A6B88]"
        }`}
      >
        {content}
      </Text>
    </View>
  );
};

export default CustomLabel;

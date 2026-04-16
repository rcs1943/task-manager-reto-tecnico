import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenStyles {
  container?: ViewStyle;
  content?: ViewStyle;
}

interface Props {
  children: ReactNode;
  styles?: ScreenStyles;
}

const MainScreen = ({
  children,
  styles = {
    container: {},
    content: {},
  },
}: Props) => {
  return (
    <SafeAreaView
      style={styles.container}
      className="flex-1 bg-[#F8F8FF] dark:bg-background-dark gap-10 px-6"
    >
      {children}
    </SafeAreaView>
  );
};

export default MainScreen;

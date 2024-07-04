import { ThemedText } from "@/components/typography/themed-text";
import { View } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Header({
  title,
  subtitle,
  left,
  right,
  scrollY,
}: {
  title?: string;
  subtitle?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  scrollY: SharedValue<number>;
}) {
  const insets = useSafeAreaInsets();

  /* based on scroll position change opacity */
  const styleAnimated = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [80, 150], [0, 1]),
  }));

  return (
    <View
      className="flex-row bg-foreground px-6 py-2"
      style={{
        paddingTop: insets.top + 16,
      }}
    >
      <View className="min-w-16">{left}</View>
      <Animated.View
        className="flex-1 justify-center items-center flex-col opacity-0"
        style={styleAnimated}
      >
        <ThemedText>{title}</ThemedText>
        <ThemedText intent="subtle">{subtitle}</ThemedText>
      </Animated.View>
      <View className="min-w-16">{right}</View>
    </View>
  );
}

import { ActivityIndicator, View } from "react-native";

import { ThemedText } from "@/components/typography/themed-text";
import { useTheme } from "@/hooks/use-theme";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export function LoadingIndicator() {
  const { colors } = useTheme();

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex-row gap-2 h-28 justify-center items-center"
    >
      <ActivityIndicator color={colors["--color-gray-icon"]} />
      <ThemedText intent={"subtle"}>Loading...</ThemedText>
    </Animated.View>
  );
}

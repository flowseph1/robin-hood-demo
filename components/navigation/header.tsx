import { ThemedText } from "@/components/typography/themed-text";
import { View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Header({
  title,
  subtitle,
  left,
  right,
}: {
  title?: string;
  subtitle?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row bg-foreground px-6"
      style={{
        paddingTop: insets.top + 16,
      }}
    >
      <View className="min-w-16">{left}</View>
      <View className="flex-1 justify-center items-center flex-col opacity-0">
        <ThemedText>{title}</ThemedText>
        <ThemedText intent="subtle">{subtitle}</ThemedText>
      </View>
      <View className="min-w-16">{right}</View>
    </View>
  );
}

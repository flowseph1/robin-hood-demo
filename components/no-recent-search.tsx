import { AnimatedView } from "@/components/animated-view";
import { ThemedText } from "@/components/typography/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

export function NoRecentSearch() {
  const { colors } = useTheme();

  return (
    <AnimatedView classNames="flex-col justify-center items-center py-10">
      <AntDesign name="inbox" size={26} color={colors["--color-gray-icon"]} />
      <ThemedText classNames="text-xl">No searches yet</ThemedText>
      <ThemedText classNames="text-font-subtle">
        Search for a symbol to get started
      </ThemedText>
    </AnimatedView>
  );
}

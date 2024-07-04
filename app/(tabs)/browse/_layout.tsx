import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";

export default function BrowseLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors["--color-background"] },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Browse" }} />
      <Stack.Screen name="[symbol]" options={{ title: "Detail" }} />
    </Stack>
  );
}

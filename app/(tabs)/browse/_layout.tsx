import { Stack } from "expo-router";

export default function BrowseLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Browse" }} />
      <Stack.Screen name="[symbol]" options={{ title: "Detail" }} />
    </Stack>
  );
}

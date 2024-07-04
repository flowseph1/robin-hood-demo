import { ThemedText } from "@/components/typography/themed-text";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <ThemedText>This screen doesn't exist.</ThemedText>
        <Link href="/">
          <ThemedText>Go to home screen!</ThemedText>
        </Link>
      </View>
    </>
  );
}

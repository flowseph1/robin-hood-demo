import { ThemeText } from "@/components/typography/text";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <ThemeText>This screen doesn't exist.</ThemeText>
        <Link href="/">
          <ThemeText>Go to home screen!</ThemeText>
        </Link>
      </View>
    </>
  );
}

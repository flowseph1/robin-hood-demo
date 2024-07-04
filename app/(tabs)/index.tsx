import { AccountBalance } from "@/components/account-balance";
import { Header } from "@/components/navigation/header";
import { ThemedText } from "@/components/typography/themed-text";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";

const SCREEN_TITLE = "Investing";
const BALANCE = "$32,465.54";

export default function HomeScreen() {
  return (
    <ScrollView bounces={false}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header title={BALANCE} subtitle={SCREEN_TITLE} />,
        }}
      />
      <AccountBalance />
    </ScrollView>
  );
}

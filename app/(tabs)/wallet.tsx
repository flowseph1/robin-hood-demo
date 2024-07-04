import { ThemedText } from "@/components/typography/themed-text";
import { View } from "react-native";

export default function Example() {
  return (
    <View className="flex-1 justify-center items-center bg-screen-bg">
      <ThemedText>Wallet</ThemedText>
    </View>
  );
}

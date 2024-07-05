import { ThemedText } from "@/components/typography/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const { theme, toggleColorScheme } = useTheme();

  return (
    <View className="flex-1 justify-center items-center gap-2">
      <TouchableOpacity onPress={toggleColorScheme}>
        <View className="">
          <ThemedText intent={"primary"}>Toggle Theme</ThemedText>
        </View>
      </TouchableOpacity>
      <ThemedText>
        {theme === "dark" ? `Theme: Dark 🌙` : "Theme: Light 🌞"}
      </ThemedText>
    </View>
  );
}

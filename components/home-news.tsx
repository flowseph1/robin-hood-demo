import { Card } from "@/components/card";
import { ThemedText } from "@/components/typography/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

export function HomeNews() {
  const { colors } = useTheme();

  return (
    <Card>
      <View className="px-6 py-3 gap-3">
        {/* New heading */}
        <View className="flex-row gap-2 items-center">
          <FontAwesome5
            name={"book-reader"}
            size={14}
            color={colors["--color-gray-icon"]}
          />
          <ThemedText intent={"subtle"} classNames="font-semibold">
            Benzinga
          </ThemedText>
          <ThemedText intent={"subtle"}>16h</ThemedText>
        </View>

        {/* New Title */}
        <ThemedText classNames="text-lg mb-10">
          Facebook digital wallet exec David Marcus to leave company
        </ThemedText>

        {/* Button */}
        <TouchableOpacity>
          <View className="flex-row gap-1 py-3">
            <ThemedText intent={"primary"} classNames="font-semibold">
              View Article
            </ThemedText>
            <Feather
              name="chevron-right"
              size={20}
              color={colors["--color-primary"]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

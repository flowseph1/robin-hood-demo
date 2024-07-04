import { Card } from "@/components/card";
import { ThemedText } from "@/components/typography/themed-text";
import { Image, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/use-theme";
import { NEWS_DATA } from "@/data/news";

const NEW_DATA = NEWS_DATA[0];

export function BrowseNews() {
  const { colors } = useTheme();

  return (
    <View className="gap-3 pb-5">
      {/* Header */}
      <View className="flex-row px-6 justify-between">
        <View className="flex-row align-center gap-2">
          <ThemedText intent={"subtitle"}>{NEW_DATA.source}</ThemedText>
          <ThemedText intent={"subtle"}>{NEW_DATA.datetime}</ThemedText>
        </View>
        <TouchableOpacity className="p-3">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={colors["--color-gray-icon"]}
          />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View className="px-6 flex-col gap-7">
        <ThemedText intent={"new-title"} numberOfLines={3}>
          {NEW_DATA.headline}
        </ThemedText>

        <View className="w-full h-[240]">
          <Image
            className="rounded-lg"
            style={{
              width: "100%",
              height: "100%",
            }}
            source={NEW_DATA.url}
          />
        </View>

        <ThemedText intent={"primary"} classNames="font-semibold">
          {NEW_DATA.related} +1.36%
        </ThemedText>
      </View>
    </View>
  );
}

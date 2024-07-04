import { ThemedText } from "@/components/typography/themed-text";
import {
  TRENDING_ITEMS_FIRST_ROW,
  TRENDING_ITEMS_SECOND_ROW,
  TRENDING_ITEMS_THIRD_ROW,
} from "@/constants/trending";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

export function TrendingList() {
  return (
    <View className="gap-3">
      <ThemedText intent={"subtitle"} classNames="px-6">
        Trending List
      </ThemedText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-col gap-4 px-6">
          <View className="flex-row gap-3">
            {TRENDING_ITEMS_FIRST_ROW.map((item) => (
              <TrendingItem item={item} key={item.name} />
            ))}
          </View>
          <View className="flex-row gap-3">
            {TRENDING_ITEMS_SECOND_ROW.map((item) => (
              <TrendingItem item={item} key={item.name} />
            ))}
          </View>
          <View className="flex-row gap-3">
            {TRENDING_ITEMS_THIRD_ROW.map((item) => (
              <TrendingItem item={item} key={item.name} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export function TrendingItem({
  item,
}: {
  item: {
    name: string;
    imgSrc: ImageSourcePropType;
  };
}) {
  return (
    <TouchableOpacity key={item.name}>
      <View className="flex-row gap-3 border border-border rounded-full px-2 py-1 w-fit items-center justify-center">
        <Image
          className="w-8 h-8 bg-border rounded-full"
          source={item.imgSrc}
        />
        <View>
          <ThemedText>{item.name}</ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

import { ThemedText } from "@/components/typography/themed-text";
import { Symbol } from "@/types/symbol";
import { TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, LinearTransition } from "react-native-reanimated";

export function SymbolList({ data }: { data: Symbol[] }) {
  return (
    <View className="">
      {data.map((symbol, i) => (
        <Animated.View
          entering={FadeIn.delay(i * 100)}
          layout={LinearTransition}
          key={symbol["1. symbol"]}
          className="border-b-[1px] border-border p-5 rounded-lg"
        >
          <TouchableOpacity>
            <View className="flex-row">
              <View className="flex-1">
                <ThemedText classNames="font-bold text-lg">
                  {symbol["1. symbol"]}
                </ThemedText>
                <ThemedText intent={"subtle"}>{symbol["2. name"]}</ThemedText>
              </View>
              <ThemedText intent={"subtle"}>{symbol["3. type"]}</ThemedText>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
}

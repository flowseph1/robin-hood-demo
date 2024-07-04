import { ThemedText } from "@/components/typography/themed-text";
import { Symbol } from "@/types/symbol";
import { Link } from "expo-router";
import { memo } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, LinearTransition } from "react-native-reanimated";

export function SymbolList({ data }: { data: Symbol[] }) {
  return (
    <View className="">
      <FlatList
        data={data}
        renderItem={({ item, index }) => <SymbolItem symbol={item} i={index} />}
        scrollEnabled={false}
      />
      {/*  {data.map((symbol, i) => (
        
      ))} */}
    </View>
  );
}

export function SymbolItem_({ symbol, i }: { symbol: Symbol; i: number }) {
  return (
    <Animated.View
      entering={FadeIn.delay(i * 100)}
      layout={LinearTransition}
      key={symbol["1. symbol"]}
      className="border-b-[1px] border-border p-5 rounded-lg"
    >
      <Link href={`/browse/${symbol["1. symbol"]}`} asChild>
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
      </Link>
    </Animated.View>
  );
}

export const SymbolItem = memo(SymbolItem_);

import { AnimatedView } from "@/components/animated-view";
import { BrowseNews } from "@/components/browse-news";
import { BrowseSearchResult } from "@/components/browse-search-result";
import { Header } from "@/components/navigation/header";
import { SearchInput } from "@/components/search-input";
import { TrendingList } from "@/components/trending-list";
import { ThemedText } from "@/components/typography/themed-text";
import { useDebounce } from "@uidotdev/usehooks";
import { Stack } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const SCREEN_TITLE = "Browse";

export default function BrowseScreen() {
  const [term, setTerm] = useState("");
  const [inputIsFocus, setInputIsFocus] = useState(false);
  /* term debounced to avoid unnecessary requests */
  const debouncedSearchTerm = useDebounce(term, 300);

  const scrollY = useSharedValue(0);

  /* catch scroll positions to make header animation */
  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      bounces={false}
      onScroll={handleScroll}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      className={"flex-1"}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header title={SCREEN_TITLE} scrollY={scrollY} />,
        }}
      />

      <View className="flex-1 bg-foreground">
        <View className="px-6 gap-5">
          <ThemedText intent={"title"}>Browse</ThemedText>
          <SearchInput
            term={term}
            setTerm={setTerm}
            handleFocus={setInputIsFocus}
          />
        </View>

        {!inputIsFocus && term.length === 0 && (
          <View className="flex-col gap-10 mt-10">
            <AnimatedView>
              <TrendingList />
            </AnimatedView>

            <AnimatedView delay={300}>
              <BrowseNews />
            </AnimatedView>
          </View>
        )}

        {(inputIsFocus || term.length > 0) && (
          <AnimatedView classNames="flex-1">
            <BrowseSearchResult term={debouncedSearchTerm} />
          </AnimatedView>
        )}
      </View>
    </Animated.ScrollView>
  );
}

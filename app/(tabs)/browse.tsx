import { AnimatedView } from "@/components/animated-view";
import { BrowseNews } from "@/components/browse-news";
import { BrowseSearch } from "@/components/browse-search";
import { Container } from "@/components/container";
import { Header } from "@/components/navigation/header";
import { SearchInput } from "@/components/search-input";
import { TrendingList } from "@/components/trending-list";
import { ThemedText } from "@/components/typography/themed-text";
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

  const scrollY = useSharedValue(0);

  /* catch scroll positions to make header animation */
  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView bounces={false} onScroll={handleScroll}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header title={SCREEN_TITLE} scrollY={scrollY} />,
        }}
      />

      <Container className="bg-foreground gap-9">
        <View className="px-6 gap-5">
          <ThemedText intent={"title"}>Browse</ThemedText>
          <SearchInput
            term={term}
            setTerm={setTerm}
            handleFocus={setInputIsFocus}
          />
        </View>

        {!inputIsFocus && (
          <AnimatedView>
            <TrendingList />
          </AnimatedView>
        )}

        {!inputIsFocus && (
          <AnimatedView delay={300}>
            <BrowseNews />
          </AnimatedView>
        )}

        {inputIsFocus && (
          <AnimatedView>
            <BrowseSearch />
          </AnimatedView>
        )}
      </Container>
    </Animated.ScrollView>
  );
}

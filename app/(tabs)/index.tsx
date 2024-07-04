import { AccountBalance } from "@/components/account-balance";
import { Container } from "@/components/container";
import { HomeList } from "@/components/home-lits";
import { HomeNews } from "@/components/home-news";
import { Header } from "@/components/navigation/header";
import { ThemedText } from "@/components/typography/themed-text";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const SCREEN_TITLE = "Investing";
const BALANCE = "$32,465.54";

export default function HomeScreen() {
  const value = useSharedValue(0);

  /* catch scroll positions to make header animation */
  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      value.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView bounces={false} onScroll={handleScroll}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <Header title={BALANCE} subtitle={SCREEN_TITLE} y={value} />
          ),
        }}
      />
      <Container>
        <AccountBalance />
        <HomeNews />
        <HomeList />
      </Container>
    </Animated.ScrollView>
  );
}

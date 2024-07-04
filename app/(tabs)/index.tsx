import { AccountBalance } from "@/components/account-balance";
import { AnimatedView } from "@/components/animated-view";
import { Container } from "@/components/container";
import { HomeList } from "@/components/home-lits";
import { HomeNews } from "@/components/home-news";
import { Header } from "@/components/navigation/header";
import { Stack } from "expo-router";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const SCREEN_TITLE = "Investing";
const BALANCE = "$32,465.54";

export default function HomeScreen() {
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
          header: () => (
            <Header title={BALANCE} subtitle={SCREEN_TITLE} scrollY={scrollY} />
          ),
        }}
      />
      <Container>
        <AnimatedView>
          <AccountBalance />
        </AnimatedView>
        <AnimatedView delay={300}>
          <HomeNews />
        </AnimatedView>
        <AnimatedView delay={500}>
          <HomeList />
        </AnimatedView>
      </Container>
    </Animated.ScrollView>
  );
}

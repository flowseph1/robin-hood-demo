import { ReactNode } from "react";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";

export function AnimatedView({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Animated.View entering={FadeInDown.delay(delay)} exiting={FadeOutUp}>
      {children}
    </Animated.View>
  );
}

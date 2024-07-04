import { ReactNode } from "react";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";

export function AnimatedView({
  children,
  delay = 0,
  classNames,
}: {
  children: ReactNode;
  delay?: number;
  classNames?: string;
}) {
  return (
    <Animated.View
      entering={FadeInDown.delay(delay)}
      exiting={FadeOutUp}
      className={classNames}
    >
      {children}
    </Animated.View>
  );
}

import { View } from "react-native";

import { ReactNode } from "react";

export function AnimatedView({ children }: { children: ReactNode }) {
  return <View>{children}</View>;
}

import { View } from "react-native";

export function Container({ children }: { children: React.ReactNode }) {
  return <View className="flex-1 flex-col gap-2">{children}</View>;
}

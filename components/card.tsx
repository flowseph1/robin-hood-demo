import { View } from "react-native";

export function Card({ children }: { children: React.ReactNode }) {
  return <View className="bg-foreground gap-6">{children}</View>;
}

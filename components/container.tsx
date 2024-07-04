import { cn } from "@/lib";
import { View } from "react-native";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <View className={cn("flex-1 flex-col gap-2", className)}>{children}</View>
  );
}

import { View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@/hooks/use-theme";
import { ThemedText } from "@/components/typography/themed-text";
import { cn } from "@/lib";

export function UpDownIndicator({
  type,
  value,
  label,
}: {
  type: "up" | "down";
  value: string;
  label: string;
}) {
  const { colors } = useTheme();

  return (
    <View className="flex-row gap-2">
      {type === "up" ? (
        <Entypo
          name={"triangle-up"}
          size={24}
          color={colors["--color-primary"]}
        />
      ) : (
        <Entypo
          name={"triangle-down"}
          size={24}
          color={colors["--color-danger"]}
        />
      )}

      <ThemedText intent="body">
        <ThemedText
          classNames={cn("font-semibold", {
            "text-primary": type === "up",
            "text-error": type === "down",
          })}
        >
          {value}{" "}
        </ThemedText>
        {label}
      </ThemedText>
    </View>
  );
}

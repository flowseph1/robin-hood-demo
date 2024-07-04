import { View } from "react-native";

import { ThemedText } from "@/components/typography/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { Entypo } from "@expo/vector-icons";

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

      <View className="flex-row gap-1 items-center">
        <ThemedText
          intent={type === "up" ? "primary" : "danger"}
          classNames="font-semibold"
        >
          {value}
        </ThemedText>

        <ThemedText intent="body">{label}</ThemedText>
      </View>
    </View>
  );
}

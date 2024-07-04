import { TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/typography/themed-text";
import { Card } from "@/components/card";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@/hooks/use-theme";
import { UpDownIndicator } from "@/components/indicators/up-down-indicator";
import { Chart } from "@/components/chart/chart";
import { FilterValues } from "@/components/chart/chart-filters";
import { useState } from "react";
import { chartData } from "@/data/static-chart";

const SCREEN_TITLE = "Investing";
const BALANCE = "$32,465.54";
const REWARDS_BUTTON_TEXT = "Rewards";
const BUYING_POWER_LABEL = "Buying Power";
const BUYING_POWER_VALUE = "$728.24";

export function AccountBalance() {
  const { colors } = useTheme();

  const [filter, setFilter] = useState<FilterValues>("1D");

  return (
    <Card>
      {/* heading section */}
      <View className="flex-col gap-4 px-6">
        <View className="flex-row justify-between">
          <ThemedText intent={"title"}>{SCREEN_TITLE}</ThemedText>
          {/* Reward Button */}
          <RewardButton />
        </View>
        <ThemedText intent={"title"}>{BALANCE}</ThemedText>
      </View>

      {/* Up and down indicators */}
      <View className="px-6">
        <UpDownIndicator type="up" value="$817.453 (0.61%)" label="Today" />
        <UpDownIndicator type="down" value="$24.1800" label="After-Hours" />
      </View>

      <View>
        {/* Chart with filters */}
        <Chart
          data={chartData.map((data) => data.close)}
          currentFilter={filter}
          onFilterPress={setFilter}
        />

        {/* Bottom section */}
        <TouchableOpacity>
          <View className="flex-row justify-between mx-6 py-5 border-t-[1px] border-t-border">
            <ThemedText>{BUYING_POWER_LABEL}</ThemedText>

            <View className="flex-row gap-2">
              <ThemedText>{BUYING_POWER_VALUE}</ThemedText>
              <Feather
                name="chevron-right"
                size={20}
                color={colors["--color-gray-icon"]}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

export function RewardButton() {
  const { colors } = useTheme();

  return (
    <TouchableOpacity>
      <View className="flex-row bg-primary-light items-center justify-center gap-2 px-3 py-2 rounded-full">
        <Feather name={"gift"} size={14} color={colors["--color-primary"]} />
        <ThemedText intent="primary" classNames="font-bold">
          {REWARDS_BUTTON_TEXT}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
}

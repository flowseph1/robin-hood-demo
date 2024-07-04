import { ChartFilters, FilterValues } from "@/components/chart/chart-filters";
import { memo } from "react";
import { View } from "react-native";
import { LineChart } from "react-native-svg-charts";

export function Chart_({
  data,
  currentFilter,
  onFilterPress,
}: {
  data: number[];
  currentFilter: FilterValues;
  onFilterPress: (filter: FilterValues) => void;
}) {
  return (
    <View className="w-full mt-6">
      {/* Chart */}
      <LineChart
        style={{ width: "100%", height: 170 }}
        data={data}
        animate={true}
        svg={{ stroke: "#00c806", strokeWidth: 1.7 }}
        contentInset={{ top: 0, bottom: 0 }}
      />

      {/* Chart filters */}
      <ChartFilters
        filterSelected={currentFilter}
        setFilterSelected={onFilterPress}
      />
    </View>
  );
}

export const Chart = memo(Chart_);

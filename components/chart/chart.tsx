import { ChartFilters } from "@/components/chart/chart-filters";
import { chartData } from "@/data/static-chart";
import { useState } from "react";
import { View } from "react-native";
import { LineChart } from "react-native-svg-charts";

const GRAPH_DATA = chartData.map((item) => item.close);

export function Chart() {
  const [filterSelected, setFilterSelected] = useState("1D");

  return (
    <View className="w-full mt-6">
      {/* Chart */}
      <LineChart
        style={{ width: "100%", height: 170 }}
        data={GRAPH_DATA}
        svg={{ stroke: "#00c806", strokeWidth: 1.7 }}
        contentInset={{ top: 0, bottom: 0 }}
      />

      {/* Chart filters */}
      <ChartFilters
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
      />
    </View>
  );
}

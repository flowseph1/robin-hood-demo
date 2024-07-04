import { chartData } from "@/data/static-chart";
import { View } from "react-native";
import { LineChart } from "react-native-svg-charts";

const GRAPH_DATA = chartData.map((item) => item.close);

export function Chart() {
  return (
    <View className="h-[170] w-full mt-6">
      <LineChart
        style={{ width: "100%", height: "100%" }}
        data={GRAPH_DATA}
        svg={{ stroke: "#00c806", strokeWidth: 1.7 }}
        contentInset={{ top: 0, bottom: 0 }}
      />
    </View>
  );
}

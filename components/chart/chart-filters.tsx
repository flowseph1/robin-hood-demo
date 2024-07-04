import { ThemedText } from "@/components/typography/themed-text";
import { cn } from "@/lib";
import { TouchableOpacity, View } from "react-native";

const FILTERS = [
  {
    label: "1D",
    value: "1D",
  },
  {
    label: "1W",
    value: "1W",
  },
  {
    label: "1M",
    value: "1M",
  },
  {
    label: "3M",
    value: "3M",
  },
  {
    label: "1Y",
    value: "1Y",
  },
  {
    label: "ALL",
    value: "ALL",
  },
];

export function ChartFilters({
  filterSelected,
  setFilterSelected,
}: {
  filterSelected: string;
  setFilterSelected: (filter: string) => void;
}) {
  return (
    <View className="w-full justify-between flex-row gap-3 py-7 px-6">
      {FILTERS.map((filter) => (
        <TouchableOpacity
          key={filter.value}
          onPress={() => setFilterSelected(filter.value)}
        >
          <View
            className={cn("py-1 px-3 rounded-lg", {
              "bg-primary": filterSelected === filter.value,
            })}
          >
            <ThemedText
              classNames={cn("text-primary font-semibold", {
                "text-white ": filterSelected === filter.value,
              })}
            >
              {filter.label}
            </ThemedText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

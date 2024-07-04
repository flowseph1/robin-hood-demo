import { Card } from "@/components/card";
import { Chart } from "@/components/chart/chart";
import { FilterValues } from "@/components/chart/chart-filters";
import { UpDownIndicator } from "@/components/indicators/up-down-indicator";
import { ThemedText } from "@/components/typography/themed-text";
import { getTimeSeries } from "@/lib/api-request";
import { USDollar } from "@/lib/utils";
import { CompanyOverview } from "@/types/company-overview";
import { GlobalQuote } from "@/types/global-quote";
import { useMemo, useState } from "react";
import { Alert, View } from "react-native";
import { useQuery } from "react-query";

const parseFilterToApiFunction = (filter: FilterValues) => {
  switch (filter) {
    case "1D":
      return "TIME_SERIES_DAILY";

    case "1W":
      return "TIME_SERIES_WEEKLY";

    case "1M":
      return "TIME_SERIES_MONTHLY";

    default:
      return "TIME_SERIES_DAILY";
  }
};

export function SymbolChart({
  companyOverviewData,
  companyGlobalQuoteData,
}: {
  companyOverviewData: CompanyOverview;
  companyGlobalQuoteData: GlobalQuote;
}) {
  const [filter, setFilter] = useState<FilterValues>("1D");

  /* Get chart data */
  const { data } = useQuery({
    queryFn: ({ signal }) =>
      getTimeSeries(
        companyGlobalQuoteData["01. symbol"],
        parseFilterToApiFunction(filter),
        signal,
      ),
    queryKey: ["chart-data", filter],
    retry: false,
    onError: (error) => {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }

      console.log(error);
    },
  });

  /* Parse chart data based on api response */
  const chartDataParsed = useMemo(() => {
    if (!data) return [];

    if ("Time Series (Daily)" in data) {
      return Object.values(data["Time Series (Daily)"]).map((item) =>
        Number(item["4. close"]),
      );
    }

    if ("Weekly Time Series" in data) {
      return Object.values(data["Weekly Time Series"]).map((item) =>
        Number(item["4. close"]),
      );
    }

    if ("Monthly Time Series" in data) {
      return Object.values(data["Monthly Time Series"]).map((item) =>
        Number(item["4. close"]),
      );
    }
  }, [data]);

  return (
    <Card>
      {/* heading section */}
      <View className="flex-col gap-4 px-6">
        <ThemedText classNames="font-semibold" numberOfLines={1}>
          {companyOverviewData.Symbol}
        </ThemedText>

        <View className="flex-row justify-between">
          <ThemedText intent={"title"} numberOfLines={2}>
            {companyOverviewData.Name}
          </ThemedText>
        </View>
        <ThemedText intent={"title"}>
          {USDollar.format(Number(companyGlobalQuoteData["05. price"]))}
        </ThemedText>
      </View>

      {/* Body */}
      <View className="px-6">
        <UpDownIndicator
          type={
            Number(companyGlobalQuoteData["09. change"]) < 0 ? "down" : "up"
          }
          value={`${USDollar.format(
            Number(companyGlobalQuoteData["09. change"]),
          )} (${companyGlobalQuoteData["10. change percent"]})`}
          label="Today"
        />
        {/* <UpDownIndicator type="down" value="$24.1800" label="After-Hours" /> */}
      </View>

      <Chart
        data={chartDataParsed ?? []}
        currentFilter={filter}
        onFilterPress={setFilter}
      />
    </Card>
  );
}

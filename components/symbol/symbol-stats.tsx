import { ThemedText } from "@/components/typography/themed-text";
import { CompanyOverview } from "@/types/company-overview";
import { GlobalQuote } from "@/types/global-quote";
import { ReactNode } from "react";
import { View } from "react-native";

export function SymbolStats({
  companyGlobalQuoteData,
  companyOverviewData,
}: {
  companyGlobalQuoteData: GlobalQuote;
  companyOverviewData: CompanyOverview;
}) {
  return (
    <View className="px-6 py-2 flex-col gap-4">
      <ThemedText intent={"card-title"}>Stats</ThemedText>
      <View className="flex-col gap-2">
        <StatRow>
          <Stat
            label="Open"
            value={Number(companyGlobalQuoteData["02. open"]).toFixed(2)}
          />
          <Stat
            label="Volume"
            value={Number(companyGlobalQuoteData["06. volume"]).toFixed(2)}
          />
        </StatRow>
        <StatRow>
          <Stat
            label="High"
            value={Number(companyGlobalQuoteData["03. high"]).toFixed(2)}
          />
          <Stat
            label="Low"
            value={Number(companyGlobalQuoteData["04. low"]).toFixed(2)}
          />
        </StatRow>

        <StatRow>
          <Stat
            label="52 Wk High"
            value={Number(companyOverviewData["52WeekHigh"]).toFixed(2)}
          />
          <Stat
            label="52 Wk Low"
            value={Number(companyOverviewData["52WeekLow"]).toFixed(2)}
          />
        </StatRow>

        <StatRow>
          <Stat
            label="P/E Ratio"
            value={Number(companyOverviewData["PERatio"]).toFixed(2)}
          />
          <Stat
            label="Div/Yield"
            value={Number(companyOverviewData["DividendYield"]).toFixed(2)}
          />
        </StatRow>
      </View>
    </View>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row flex-1 justify-between py-2">
      <ThemedText classNames="text-font-subtle">{label}</ThemedText>
      <ThemedText>{value}</ThemedText>
    </View>
  );
}

export function StatRow({ children }: { children: ReactNode }) {
  return <View className="flex-1 flex-row gap-4">{children}</View>;
}

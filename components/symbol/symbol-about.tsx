import { Stat } from "@/components/symbol/symbol-stats";
import { ThemedText } from "@/components/typography/themed-text";
import { CompanyOverview } from "@/types/company-overview";
import { View } from "react-native";

export function SymbolAbout({
  companyOverviewData,
}: {
  companyOverviewData: CompanyOverview;
}) {
  return (
    <View className="px-6 py-2 flex-col gap-4">
      <ThemedText intent={"card-title"}>
        About {companyOverviewData.Name}
      </ThemedText>
      <View className="flex-col gap-2">
        <ThemedText intent={"subtle2"}>
          {companyOverviewData.Description}
        </ThemedText>
        <Stat label="Country" value={companyOverviewData.Country} />
        <Stat label="Sector" value={companyOverviewData.Sector} />
        <Stat label="Industry" value={companyOverviewData.Industry} />
        <Stat
          label="Latest Quarter"
          value={companyOverviewData.LatestQuarter}
        />
      </View>
    </View>
  );
}

import { SymbolList } from "@/components/browse/symbol-list";
import { NoRecentSearch } from "@/components/no-recent-search";
import { SYMBOLS_DATA } from "@/data/symbols";
import { searchSymbol } from "@/lib/api-request";
import { Alert, View } from "react-native";
import { useQuery } from "react-query";

export function BrowseSearchResult({ term }: { term: string }) {
  const { data } = useQuery({
    queryFn: () => searchSymbol(term),
    queryKey: ["search", term],
    onError: (error) => {
      if (error instanceof Error) {
        console.log("error", error);
        Alert.alert("An error occur");
        return;
      }

      Alert.alert("An error occur");
    },
    enabled: term.length > 0,
  });

  console.log(
    "components/browse-search.tsx | #22 -> data",
    JSON.stringify(data, null, 4),
  );

  return (
    <View className="px-6 flex-1">
      {!data && <NoRecentSearch />}

      {/* In case API request daily rate reached use component with static data */}
      {/* {data && <SymbolsList data={SYMBOLS_DATA.bestMatches} />} */}

      {data && <SymbolList data={SYMBOLS_DATA.bestMatches} />}
    </View>
  );
}

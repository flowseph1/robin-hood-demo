import { SearchHistory } from "@/components/browse/search-history";
import { SymbolList } from "@/components/browse/symbol-list";
import { LoadingIndicator } from "@/components/loading-indicator";
import { NoRecentSearch } from "@/components/no-recent-search";
import { SYMBOLS_DATA } from "@/data/symbols";
import { searchSymbol } from "@/lib/api-request";
import { useSearchHistoryStore } from "@/stores/use-search-history-store";
import { memo } from "react";
import { Alert, View } from "react-native";
import { useQuery } from "react-query";

export function BrowseSearchResult_({ term }: { term: string }) {
  const history = useSearchHistoryStore((state) => state.history);

  const { data, isLoading } = useQuery({
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

  return (
    <View className="px-6 flex-1">
      {!data && !isLoading && history.length === 0 && <NoRecentSearch />}

      {data && <SymbolList data={SYMBOLS_DATA.bestMatches} />}

      {isLoading && <LoadingIndicator />}

      {!isLoading && !data && history.length > 0 && <SearchHistory />}
    </View>
  );
}

export const BrowseSearchResult = memo(BrowseSearchResult_);

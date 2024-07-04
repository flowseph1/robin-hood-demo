import { ThemedText } from "@/components/typography/themed-text";
import { useTheme } from "@/hooks/use-theme";
import { useSearchHistoryStore } from "@/stores/use-search-history-store";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export function SearchHistory() {
  const { colors } = useTheme();
  const history = useSearchHistoryStore((state) => state.history);
  const removeFromHistory = useSearchHistoryStore(
    (state) => state.removeFromHistory,
  );

  return (
    <View className="flex-col gap-4 py-6">
      <ThemedText intent={"subtle"}>Recently Viewed</ThemedText>
      {history.map((search, i) => (
        <Link key={search} href={`/browse/${search}`} asChild>
          <TouchableOpacity>
            <View className="flex-row justify-between">
              <ThemedText key={i}>{search}</ThemedText>
              <TouchableOpacity
                className="px-5"
                onPress={() => removeFromHistory(search)}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color={colors["--color-gray-icon"]}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
}

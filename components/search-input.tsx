import { useTheme } from "@/hooks/use-theme";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

const PLACEHOLDER = "Search companies...";
const TEXT_INPUT_HEIGHT = 40;

export function SearchInput({
  term,
  setTerm,
  handleFocus,
}: {
  term: string;
  setTerm: (term: string) => void;
  handleFocus: (value: boolean) => void;
}) {
  const { colors } = useTheme();

  return (
    <View className="flex-row gap-2 rounded-md bg-search-bar items-center px-3">
      <FontAwesome5
        name={"search"}
        size={13}
        color={colors["--color-gray-icon"]}
      />
      <TextInput
        value={term}
        onFocus={() => handleFocus(true)}
        onChangeText={setTerm}
        placeholder={PLACEHOLDER}
        className="w-full"
        placeholderTextColor={colors["--color-font-subtle"]}
        style={{
          height: TEXT_INPUT_HEIGHT,
          color: colors["--color-font-default"],
        }}
      />
    </View>
  );
}

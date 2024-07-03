import { useThemeStore } from "@/stores/use-theme-store";
import { useColorScheme as useColorSchemeNative } from "react-native";
import themeColors from "@/constants/colors";

export function useColorScheme() {
  const systemTheme = useColorSchemeNative();
  const userTheme = useThemeStore((state) => state.theme);

  /* Return system theme if not user theme has been set */
  const theme = userTheme ? userTheme : systemTheme;
  /* Return theme colors */
  const colors = themeColors[theme ?? "light"];

  return {
    theme,
    colors,
  };
}

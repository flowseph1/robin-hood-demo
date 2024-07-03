import { useThemeStore } from "@/stores/use-theme-store";
import { useColorScheme as useColorSchemeNative } from "react-native";

export function useColorScheme() {
  const systemTheme = useColorSchemeNative();
  const userTheme = useThemeStore((state) => state.theme);

  /* Return system theme if not user theme has been set */
  return userTheme ? userTheme : systemTheme;
}

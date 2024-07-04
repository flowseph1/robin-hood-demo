import { useColorScheme } from "nativewind";
import themeColors from "@/constants/colors";

export function useTheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();

  /* Obtain theme based on colorScheme */
  const colors = themeColors[colorScheme as keyof typeof themeColors];

  return {
    theme: colorScheme as "dark" | "light",
    colors,
    setColorScheme,
    toggleColorScheme,
  };
}

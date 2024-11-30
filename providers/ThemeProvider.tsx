import React, { createContext } from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import { theme } from "@/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext<{
  theme: "light" | "dark" | undefined;
}>({
  theme: "light",
});
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // const { colorScheme  } = useColorScheme();
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      <View style={theme["light"]} className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

import { ThemeProvider } from "@/providers/ThemeProvider";
import { colors } from "@/theme";
import { Stack } from "expo-router";
import React from "react";
import "../global.css";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          statusBarAnimation: "slide",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            statusBarStyle: "light",
            statusBarBackgroundColor: colors("light").foreground,
          }}
        />
        <Stack.Screen
          name="(screens)/chat"
          options={{
            headerShown: false,
            statusBarStyle: "dark",
            animation: "ios_from_left",
            // statusBarBackgroundColor: colors("light").foreground,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

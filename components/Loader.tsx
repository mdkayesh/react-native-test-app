import { colors } from "@/theme";
import { useColorScheme } from "nativewind";
import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

const Loader = ({ ...rest }: ActivityIndicatorProps) => {
  const { colorScheme } = useColorScheme();

  return (
    <ActivityIndicator
      size={"large"}
      color={colors(colorScheme).primary}
      {...rest}
    />
  );
};

export default Loader;

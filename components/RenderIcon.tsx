import { colors } from "@/theme";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import React from "react";

interface RenderIconProps extends IconProps<string> {
  Icon: React.ComponentType<IconProps<any>>;
}

const RenderIcon = ({ Icon, ...rest }: RenderIconProps) => {
  // const { colorScheme } = useColorScheme();

  return <Icon size={24} color={colors("light").primary} {...rest} />;
};

export default RenderIcon;

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { ScrollView, View } from "react-native";

type ScreenWrapperProps = {
  disableScroll?: boolean;
  children?: React.ReactNode;
};
const ScreenWrapper = ({
  disableScroll = false,
  children,
}: ScreenWrapperProps) => {
  const tabHeight = useBottomTabBarHeight();
  const Wrapper = !disableScroll ? ScrollView : View;

  return (
    <Wrapper
      className="flex-1 bg-background"
      style={{ paddingBottom: tabHeight }}
    >
      {children}
    </Wrapper>
  );
};

export default ScreenWrapper;

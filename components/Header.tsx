import { View, Text } from "react-native";
import React from "react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <View className="px-4 py-4 bg-foreground flex-row items-center gap-4">
      <Avatar />
      <View>
        <Text className="text-background text-lg font-semibold">
          Noam Penn (Panther)
        </Text>
        <Text className="text-muted-foreground">a tennis player</Text>
      </View>
    </View>
  );
};

export default Header;

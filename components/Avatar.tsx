import { cn } from "@/utils/utils";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

type AvatarProps = {
  className?: string;
  name?: string;
  imageUrl?: ImageSourcePropType | undefined;
  isActive?: boolean;
};

const Avatar = ({ imageUrl, className, isActive = false }: AvatarProps) => {
  return (
    <View>
      <View
        className={cn(
          "h-14 w-14 rounded-full overflow-hidden border border-primary p-0.5",
          className
        )}
      >
        <Image
          className={"w-full h-full rounded-full"}
          source={imageUrl ?? require("@/assets/images/avatar.png")}
          resizeMode="cover"
          accessible
          accessibilityLabel="Profile image"
        />
      </View>
      {isActive && (
        <View className="absolute bottom-0 right-2 h-3 w-3 rounded-full bg-green-500" />
      )}
    </View>
  );
};

export default Avatar;

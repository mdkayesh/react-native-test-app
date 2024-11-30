import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import RenderIcon from "./RenderIcon";
import { AntDesign, Feather } from "@expo/vector-icons";

export type NewsCardProps = {
  title: string;
  timeAgo: string;
  commentsCount: number;
  image: string;
};
const NewsCard = ({ title, timeAgo, commentsCount, image }: NewsCardProps) => {
  return (
    <View className="flex-row gap-2 border-t border-border pt-5">
      <View className="flex-1">
        <Text className="text-primary">News</Text>
        <Text className="text-base mt-1">{title}</Text>

        <View className="flex-row items-center gap-3 mt-1">
          <View className="flex-row gap-1 items-center">
            <RenderIcon Icon={AntDesign} name="clockcircleo" size={13} />

            <Text className="text-muted-foreground text-sm">{timeAgo}</Text>
          </View>

          <View className="flex-row gap-1 items-center">
            <RenderIcon Icon={Feather} name="message-circle" size={13} />

            <Text className="text-muted-foreground text-sm">
              {commentsCount} comments
            </Text>
          </View>
        </View>
      </View>
      <View
        className="h-full w-32 rounded-lg overflow-hidden"
        style={{
          aspectRatio: 4 / 3.5,
        }}
      >
        <Image
          source={require("@/assets/images/news-thumb.png")}
          className="w-full h-full"
        />
      </View>
    </View>
  );
};

export default NewsCard;

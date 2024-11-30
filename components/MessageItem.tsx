import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import Avatar from "./Avatar";

type MessageItemProps = {
  id: string;
  senderId: string;
  message: string;
  name: string;
  time: string;
  image: string;
};
const MessageItem = ({ id, senderId, message, image }: MessageItemProps) => {
  const isMe = senderId === "sender-2";

  return (
    <View
      className={`${
        isMe
          ? "justify-start flex-row-reverse self-end"
          : "justify-start flex-row"
      } items-end gap-4`}
      style={{ maxWidth: "80%" }}
    >
      <Avatar imageUrl={{ uri: image }} className="h-12 w-12" />
      <View className="border-border border rounded-lg overflow-hidden">
        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={!isMe ? ["#ffffff", "#ffffff"] : ["#3498DB", "#34506D"]}
          className="p-4"
        >
          <Text className={`${isMe ? "text-white" : ""}`}>{message}</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default MessageItem;

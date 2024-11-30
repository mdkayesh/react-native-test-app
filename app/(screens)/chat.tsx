import Avatar from "@/components/Avatar";
import MessageItem from "@/components/MessageItem";
import RenderIcon from "@/components/RenderIcon";
import Button from "@/components/ui/Button";
import messages from "@/data/messages.json";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TextInput, View } from "react-native";

const ChatScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background">
      <View className="flex-row px-4 py-4 border-b border-border items-center justify-center gap-2">
        <Text className="text-lg text-primary">
          Monday, February 23 | 14:00 - Tel Aviv
        </Text>

        <Button size={"icon"} className="bg-background" onPress={router.back}>
          <RenderIcon
            Icon={Entypo}
            name="chevron-thin-right"
            size={24}
            color={"black"}
          />
        </Button>
      </View>

      <View className="flex-row items-center px-4 py-4 border-b border-border">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="bg-background"
          containerClass="h-10"
        >
          <RenderIcon Icon={Ionicons} name="share-social-outline" />
        </Button>
        <View className="flex-1 justify-center flex-row gap-3 items-center">
          <Avatar className="h-12 w-12" isActive />
          <Avatar className="h-12 w-12" isActive />
          <Avatar className="h-12 w-12" isActive />
          <Avatar className="h-12 w-12" isActive />
        </View>
      </View>

      <View className="flex-1 pb-10">
        <FlatList
          inverted
          data={messages}
          contentContainerStyle={{
            paddingHorizontal: 12,
            paddingVertical: 12,
            gap: 20,
            flexDirection: "column-reverse",
          }}
          renderItem={({ item }) => <MessageItem {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View className="pb-6 flex-row items-center px-4">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="bg-background"
          containerClass="h-10"
        >
          <RenderIcon Icon={AntDesign} name="plus" size={24} />
        </Button>
        <TextInput className="py-4 flex-1" placeholder="Add a comment" />

        <Button
          size={"icon"}
          containerClass="rounded-full"
          className="h-12 w-12"
        >
          <RenderIcon
            Icon={Ionicons}
            name="send-outline"
            size={18}
            color="white"
          />
        </Button>
      </View>
    </View>
  );
};

export default ChatScreen;

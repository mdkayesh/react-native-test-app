import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import RenderIcon from "@/components/RenderIcon";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import newsData from "@/data/news.json";
import gamesData from "@/data/games.json"; // Renamed for clarity
import NewsCard, { NewsCardProps } from "@/components/NewsCard";
import GameCard, { GameCardProps } from "@/components/GameCard";
import Button from "@/components/ui/Button";

type InterleavedData =
  | { type: "news"; data: NewsCardProps }
  | { type: "game"; data: GameCardProps };

const NewsScreen = () => {
  // Create interleaved data
  const interleavedData: InterleavedData[] = [];
  const gamesCount = gamesData.length;

  newsData.forEach((news, index) => {
    // Add news to interleavedData
    interleavedData.push({ type: "news", data: news });

    // Add a game after every two news items
    if ((index + 1) % 2 === 0 && index / 2 < gamesCount) {
      const gameIndex = Math.floor(index / 2); // Map index to the game list
      interleavedData.push({ type: "game", data: gamesData[gameIndex] });
    }
  });

  return (
    <ScrollView className={"flex-1 bg-background"}>
      <View className="flex-1 px-4">
        {/* Header Section */}
        <View
          className="rounded-lg overflow-hidden mt-6 w-full"
          style={{
            aspectRatio: 4 / 2,
          }}
        >
          <Image
            source={require("@/assets/images/thumb.png")}
            className="w-full h-full"
            resizeMode="cover"
          />

          <View className="absolute bottom-0 left-0 w-full p-4">
            <Text className="text-white">
              Lorem Ipsum is a nickname for such a completely meaningless text -
              some
            </Text>
            <View className="flex-row items-center gap-3">
              <Text className="text-white">Lorem Ipsum is</Text>
              <View className="h-1 w-1 rounded-full bg-white" />
              <Text className="text-white">
                2 minutes of reading{" "}
                <RenderIcon
                  Icon={AntDesign}
                  name="clockcircleo"
                  size={13}
                  color={"white"}
                />
              </Text>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View className="mt-6 gap-5">
          {interleavedData.map((item, index) => {
            if (item.type === "news") {
              return <NewsCard key={`news-${index}`} {...item.data} />;
            } else if (item.type === "game") {
              return (
                <GameCard key={`game-${index}`} {...item.data} showScores />
              );
            }
            return null; // Fallback to ensure type safety
          })}
        </View>

        <View className="rounded-lg border border-border p-4 mt-6 mb-10">
          <View className="flex-row justify-between">
            <Text className="text-primary">System message</Text>

            <Button
              size={"icon"}
              variant={"ghost"}
              className="bg-background"
              containerClass="h-10"
            >
              <RenderIcon Icon={Ionicons} name="share-social-outline" />
            </Button>
          </View>

          <Text>
            Lorem Ipsum is a term for a completely common meaningless text -
            sometimes also called Lorem Ipsum!
          </Text>
          <View className="flex-row gap-1 items-center mt-2">
            <RenderIcon Icon={AntDesign} name="clockcircleo" size={13} />

            <Text className="text-muted-foreground text-sm">an hour ago</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsScreen;

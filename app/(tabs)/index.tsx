import GameCard from "@/components/GameCard";
import RenderIcon from "@/components/RenderIcon";
import ScreenWrapper from "@/components/ScreenWrapper";
import Button from "@/components/ui/Button";
import games from "@/data/games.json";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const GameScreen = () => {
  return (
    <ScreenWrapper>
      <View className="flex-1">
        <View className="flex-row gap-3 items-center py-4 border-b border-border px-4">
          <Button className="bg-background" size={"icon"}>
            <Image source={require("@/assets/images/icons/filter.png")} />
          </Button>

          <Button
            variant={"outline"}
            containerClass="flex-1 max-w-[150px] rounded-full border border-border"
            className="justify-between border-0"
          >
            <Text>Date | Hour</Text>
            <RenderIcon Icon={Feather} name="chevron-down" size={24} />
          </Button>
        </View>
        <ScrollView className="px-4">
          <View className="flex-row justify-start mt-4">
            <Button
              variant={"outline"}
              containerClass="rounded-full border border-primary"
              className="border-0"
            >
              <Text className="text-primary">Double Games</Text>
            </Button>
          </View>

          <View className="mt-5 gap-4 pb-10">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default GameScreen;

import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Avatar from "./Avatar";
import RenderIcon from "./RenderIcon";
import Button from "./ui/Button";

export type GameCardProps = {
  title: string;
  id: string;
  date: string;
  time: string;
  messagesCount: string;
  participation: string; //in percent
  weather: string;
  teamA: {
    name: string;
    id: string;
    lavel: string;
    image: string;
  }[];

  teamB: {
    name: string;
    id: string;
    lavel: string;
    image: string;
  }[];

  scors: { teamA: string; teamB: string }[];
  showScores?: boolean;
};

const GameCard = ({
  title,
  date,
  time,
  messagesCount,
  teamA,
  teamB,
  participation,
  weather,
  scors,
  showScores = false,
}: GameCardProps) => {
  return (
    <View className="flex-1 border border-border overflow-hidden rounded-lg">
      <View className="px-4 py-4 flex-row border-b border-border">
        <View className="flex-1">
          <Text className="text-lg text-primary">{title}</Text>
          <View className="flex-row items-center gap-3 mt-1">
            <View className="flex-row gap-1 items-center">
              <RenderIcon
                Icon={Ionicons}
                name="calendar-clear-outline"
                size={16}
              />

              <Text className="text-muted-foreground text-sm">
                {date.split("-").reverse().join("/")}
              </Text>
            </View>

            <View className="flex-row gap-1 items-center">
              <RenderIcon Icon={AntDesign} name="clockcircleo" size={16} />

              <Text className="text-muted-foreground text-sm">{time}</Text>
            </View>

            <View className="flex-row gap-1 items-center">
              <RenderIcon Icon={Feather} name="message-circle" size={16} />

              <Text className="text-muted-foreground text-sm">
                {messagesCount} messages
              </Text>
            </View>
          </View>
        </View>

        <Button
          size={"icon"}
          variant={"ghost"}
          className="bg-background"
          containerClass="h-10"
        >
          <RenderIcon Icon={Ionicons} name="share-social-outline" />
        </Button>
      </View>

      <View className="flex-row items-center justify-between px-4 py-6">
        <View className="flex-row gap-2">
          {teamA.map((team) => (
            <View key={team.id} className="items-center">
              <Avatar imageUrl={{ uri: team.image }} className="h-16 w-16" />

              <Text className="mt-1 text-center text-sm">{team.name}</Text>
              <Text className="text-center text-muted-foreground text-xs">
                ({team.lavel})
              </Text>
            </View>
          ))}
        </View>

        <View>
          {showScores ? (
            scors.map((s, index) => (
              <Text
                className="mb-2 text-primary font-semibold px-2 rounded-full py-1 border border-border text-sm"
                key={index}
              >
                {s.teamA} / {s.teamB}
              </Text>
            ))
          ) : (
            <Text className="text-xl text-primary font-semibold">VS</Text>
          )}
        </View>

        {/* right */}
        <View className="flex-row gap-2">
          {teamB.map((team) => (
            <View key={team.id} className="items-center">
              {!showScores ? (
                <View className="h-16 w-16 border-dashed rounded-full border border-primary justify-center items-center">
                  <View>
                    <RenderIcon Icon={AntDesign} name="plus" size={24} />
                  </View>
                </View>
              ) : (
                <Avatar imageUrl={{ uri: team.image }} className="h-16 w-16" />
              )}

              <Text className="mt-1 text-center text-sm line-clamp-1">
                {team.name}
              </Text>
              <Text className="text-center text-muted-foreground text-xs line-clamp-1">
                (nickname)
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View className="border-t border-border flex-row justify-between items-center pl-2">
        <View className="flex-1 py-2">
          <View className="flex-row items-center gap-1">
            <RenderIcon
              Icon={MaterialCommunityIcons}
              name="water-outline"
              size={20}
            />
            <Text className="text-muted-foreground">
              {participation}% Precipitation
            </Text>
          </View>
          <View className="flex-row items-center gap-1">
            <RenderIcon
              Icon={MaterialCommunityIcons}
              name="weather-cloudy"
              size={20}
            />
            <Text className="text-muted-foreground">Weather - {weather}</Text>
          </View>
        </View>

        <Link href={"/chat"} asChild>
          <Button
            size={"lg"}
            containerClass="rounded-none h-full w-[130px]"
            className="flex-1"
          >
            <Text className="text-primary-foreground font-semibold text-lg">
              Chat
            </Text>
          </Button>
        </Link>
      </View>
    </View>
  );
};

export default GameCard;

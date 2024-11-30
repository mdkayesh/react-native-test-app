import Header from "@/components/Header";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
        animation: "shift",
        tabBarStyle: {
          backgroundColor: "#1F1B1B",
          height: 70,
        },
        tabBarLabelStyle: { marginTop: 3, fontSize: 14 },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarActiveTintColor: "white",
        headerPressColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Game Board",
          tabBarIcon: () => (
            <View>
              <Image
                source={require("@/assets/images/icons/game-board.png")}
                className="w-7 h-7"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require("@/assets/images/icons/register.png")}
                className="w-7 h-7"
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="rank"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <View>
              <SimpleLineIcons name="chart" size={24} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require("@/assets/images/icons/news.png")}
                className="w-7 h-7"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

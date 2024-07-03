import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/tab-bar-icon";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const { colors } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors["--color-nav-icon-active"],
        headerShown: false,
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chart",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"bar-chart"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"wallet"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"search"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"chatbox-ellipses"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"person-sharp"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

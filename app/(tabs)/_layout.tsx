import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/tab-bar-icon";
import { screenWidth } from "@/lib/dimensions";
import { useTheme } from "@/hooks/use-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_BAR_HEIGHT = 65;

export default function TabLayout() {
  const { colors } = useTheme();

  const insets = useSafeAreaInsets();

  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: colors["--color-background"],
      }}
      screenOptions={{
        tabBarActiveTintColor: colors["--color-nav-icon-active"],
        tabBarInactiveTintColor: colors["--color-nav-icon-inactive"],
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors["--color-bar-light"],
          height: TAB_BAR_HEIGHT + insets.bottom,
          borderTopWidth: 0,
          paddingHorizontal: screenWidth / 20,
          elevation: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        tabBarLabel: () => null,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chart",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={"bar-chart"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={"wallet"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={"search"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={"chatbox-ellipses"} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={"person-sharp"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

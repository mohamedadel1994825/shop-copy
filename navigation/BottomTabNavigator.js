import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import { Ionicons } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();
export default function BottomTabNavigator({ navigation, route }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Get Started",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-appstore" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={LinksScreen}
        options={{
          title: "Resources",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

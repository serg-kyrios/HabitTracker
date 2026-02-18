// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// import RootNavigator from "../HabitTracker/navigation/RootNavigator";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

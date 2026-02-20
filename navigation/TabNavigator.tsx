import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import { RootTabParamList } from "./types";
const Tab = createBottomTabNavigator<RootTabParamList>();
import { Ionicons } from "@expo/vector-icons";

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <Ionicons
            name="add"
            size={24}
            color="#fff"
            style={{ marginRight: 15 }}
          />
        ),
        headerBackground: () => (
          <LinearGradient
            colors={["#062E35", "#020212"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
          />
        ),
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        tabBarBackground: () => (
          <LinearGradient
            colors={["#020212", "#062E35"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
          />
        ),
        tabBarStyle: {
          position: "absolute",
          margin: 16,
          borderRadius: 20,
          height: 65,
          backgroundColor: "#1f1f1f",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 6,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255,255,255,0.6)",
      }}
    >
      <Tab.Screen
        name="Habits"
        component={HomeScreen}
        options={{
          title: "My Habits" as any,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="checkmark-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      {/* <Tab.Screen name="Habits" component={HomeScreen} /> */}
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// tabBarStyle → фон і форма
// tabBarLabelStyle → текст
// tabBarIconStyle → іконка
// tabBarItemStyle → контейнер табу
// tabBarActiveTintColor → активний
// tabBarInactiveTintColor → неактивний

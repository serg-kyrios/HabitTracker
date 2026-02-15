import { View, Text, Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function LoadingScreen({ navigation }: any) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => navigation.replace("Home"), 800);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.Text style={{ opacity: fade, fontSize: 28 }}>
        Habit Tracker
      </Animated.Text>
    </View>
  );
}

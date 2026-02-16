import { View, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { styles } from "../styles/loadingStyles";

export default function LoadingScreen({ navigation }: any) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => navigation.replace("Home"), 1800);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          { opacity: fade }, // 👈 animated стиль тут
        ]}
      >
        Habit Tracker
      </Animated.Text>
    </View>
  );
}

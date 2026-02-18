import { View, Text, FlatList, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "../styles/homeStyles";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Habit = {
  id: string;
  title: string;
  done: boolean;
};

export default function HomeScreen({ navigation }) {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", title: "Drink water", done: false },
    { id: "2", title: "Workout", done: false },
    { id: "3", title: "Read 10 pages", done: false },
  ]);

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h)),
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title="Open calendar"
        onPress={() => navigation.navigate("Calendar")}
      />

      <Text style={styles.header}>Habit Tracker</Text>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.habitItem, item.done && styles.habitDone]}
            onPress={() => toggleHabit(item.id)}
          >
            <Text style={styles.habitText}>
              {item.done ? "✅ " : "⬜ "}
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

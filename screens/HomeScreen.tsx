import { View, Text, FlatList, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "../styles/homeStyles";
import { Button } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../navigation/types";
import { Ionicons } from "@expo/vector-icons";

type Habit = {
  id: string;
  title: string;
  done: boolean;
  iconName: string;
  name?: string;
};

type Props = BottomTabScreenProps<RootTabParamList, "Habits">;

export default function HomeScreen({ navigation }: Props) {
  const [habits, setHabits] = useState<Habit[]>([
    { iconName: "water-outline", id: "1", title: "Drink water", done: false },
    { iconName: "fitness-outline", id: "2", title: "Workout", done: false },
    { iconName: "book-outline", id: "3", title: "Read 10 pages", done: false },
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
            <Ionicons
              name={item.iconName as any}
              size={24}
              color={item.done ? "#10B981" : "#6B7280"}
            />
            <Text style={styles.habitText}>
              {item.done ? "✅" : "⬜"} {item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

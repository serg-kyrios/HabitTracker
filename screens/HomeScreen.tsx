import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
import { styles } from "../styles/homeStyles";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../navigation/types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/color";
import { RootStackParamList } from "../navigation/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppButton from "../components/AppButton";

type Habit = {
  id: string;
  title: string;
  done: boolean;
  iconName: string;
};

type Props = BottomTabScreenProps<RootTabParamList, "Habits">;

export default function HomeScreen({ navigation, route }: Props) {
  const [habits, setHabits] = useState<Habit[]>([
    { iconName: "water-outline", id: "1", title: "Drink water", done: false },
    { iconName: "fitness-outline", id: "2", title: "Workout", done: false },
    { iconName: "book-outline", id: "3", title: "Read 10 pages", done: false },
    {
      iconName: "medkit-outline",
      id: "4",
      title: "Take vitamins",
      done: false,
    },
    {
      iconName: "moon-outline",
      id: "5",
      title: "Go to bed early",
      done: false,
    },
    { iconName: "sun-outline", id: "6", title: "Sleep well", done: false },
    { iconName: "walk-outline", id: "7", title: "Walk more", done: false },
  ]);

  const [newHabit, setNewHabit] = useState("");

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h)),
    );
  };

  const resetHabits = () => {
    setHabits((prev) => prev.map((h) => ({ ...h, done: false })));
  };

  const addHabit = () => {
    if (!newHabit.trim()) return;

    const newItem: Habit = {
      id: Date.now().toString(),
      title: newHabit.trim(),
      done: false,
      iconName: "star-outline",
    };

    setHabits((prev) => [...prev, newItem]);
    setNewHabit("");
  };

  const doneCount = habits.filter((h) => h.done).length;

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}
    >
      <AppButton
        title="Open calendar"
        onPress={() => navigation.navigate("Calendar")}
      />

      <Text style={[styles.header, { color: colors.text.forTheMain }]}>
        Habit Tracker
      </Text>

      <Text style={styles.progress}>
        Today: {doneCount}/{habits.length}
      </Text>

      <TextInput
        value={newHabit}
        onChangeText={setNewHabit}
        placeholder="New habit"
        style={styles.input}
      />

      <AppButton title="Add habit" onPress={addHabit} />
      <AppButton title="Reset day" onPress={resetHabits} />

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

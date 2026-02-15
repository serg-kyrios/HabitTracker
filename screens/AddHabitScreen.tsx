import { View, Text, Button } from "react-native";

export default function AddHabitS({ navigation }: any) {
  return (
    <View>
      <Text>Habit Tracker</Text>
      <Button
        title="Add habit"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

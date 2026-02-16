import { View, Text, Button } from "react-native";
import { styles } from "../styles/homeStyles";

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Home Screen"
        onPress={() => navigation.navigate("AddHabit")}
      />
    </View>
  );
}

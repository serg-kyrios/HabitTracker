import { Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/appButtonStyles";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function AppButton({
  title,
  onPress,
  variant = "primary",
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      {variant === "primary" ? (
        <LinearGradient
          colors={["#4F46E5", "#06B6D4"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      ) : (
        <Text style={[styles.button, styles.secondary, styles.textSecondary]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#111",
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },

  habitItem: {
    padding: 16,
    backgroundColor: "#222",
    borderRadius: 12,
    marginBottom: 10,
  },

  habitDone: {
    backgroundColor: "#1e4620",
  },

  habitText: {
    color: "white",
    fontSize: 16,
  },
});

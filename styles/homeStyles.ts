import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //backgroundColor: "#111",
  },

  header: {
    fontStyle: "italic", // ✅ Стиль
    color: "#FFFFFF", // ✅ Колір
    lineHeight: 28, // ✅ Відстань між рядками
    letterSpacing: 1, // ✅ Відстань між буквами
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    alignContent: "center",
    textAlign: "center",
    padding: 20,
    marginTop: 20,
  },

  habitItem: {
    padding: 16,
    backgroundColor: "#222",
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row", // ✅ Рядок
    alignItems: "center", // ✅ По центру
    marginVertical: 4,
    flexWrap: "nowrap", // ✅ НЕ переносити!
  },

  habitDone: {
    backgroundColor: "#1e4620",
    opacity: 0.8,
  },

  habitText: {
    flex: 1, // ✅ Займає решту місця
    marginLeft: 12,
    fontSize: 16,
    color: "white",
  },
});

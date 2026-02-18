import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";

export default function CalendarScreen() {
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  type MarkedDates = {
    [date: string]: {
      selected?: boolean;
      marked?: boolean;
      selectedColor?: string;
    };
  };

  const onDayPress = (day: any) => {
    setMarkedDates((prev) => ({
      ...prev,
      [day.dateString]: {
        selected: true,
        marked: true,
        selectedColor: "#4caf50",
      },
    }));
  };

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        theme={{
          backgroundColor: "#111",
          calendarBackground: "#111",
          dayTextColor: "white",
          monthTextColor: "white",
          arrowColor: "white",
        }}
      />
    </View>
  );
}

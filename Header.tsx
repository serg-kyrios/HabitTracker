// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   //LinearGradient,
// } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { styles } from "./styles/homeStyles";

// interface HeaderProps {
//   title: string;
//   onBack?: () => void;
// }

// export default function Header({ title, onBack }: HeaderProps) {
//   return (
//     <LinearGradient
//       colors={["#667eea", "#764ba2"]} // 🎨 Градієнт!
//       style={styles.header}
//     >
//       <View style={styles.content}>
//         {onBack && (
//           <TouchableOpacity style={styles.backButton} onPress={onBack}>
//             <Ionicons name="arrow-back" size={24} color="white" />
//           </TouchableOpacity>
//         )}

//         <Text style={styles.title}>{title}</Text>

//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name="settings-outline" size={24} color="white" />
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// }

import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function IconButton({ icon, size, color, onPress }) {
  // we can call it from there! options -2
  // const navigation = useNavigation();
  // function pressHandler() {
  //   navigation.navigate("ManageExpense");
  // }
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && style.pressed}
    >
      <View style={style.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;
const style = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
    marginVertical: 5,
  },
  pressed: {
    opacity: 0.77,
  },
});

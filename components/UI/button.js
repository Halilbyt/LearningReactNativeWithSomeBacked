import { View, Text, Pressable, StyleSheet } from "react-native";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#512351",
  },
  flat: {
    backgroundColor: "#C060A1",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  flatText: {
    color: "#fff",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "#9156a7",
    borderRadius: 4,
  },
});

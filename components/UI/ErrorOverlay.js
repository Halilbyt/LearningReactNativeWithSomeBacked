import { View, StyleSheet, Text } from "react-native";
import Button from "./button";
function ErrorOverlay({ error, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        Ops!.. Something gone wrong
      </Text>
      <Text style={styles.text}>{error}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}
export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#512231",
  },
  text: {
    color: "#f1f1f1",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

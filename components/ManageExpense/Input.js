import { View, Text, TextInput, StyleSheet } from "react-native";

function Input({ label, textInputConfig }) {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    minWidth: "46%",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: "#E5B8F4",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#E5B8F4",
    padding: 7,
    borderRadius: 6,
    fontSize: 18,
    color: "#3B185F",
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

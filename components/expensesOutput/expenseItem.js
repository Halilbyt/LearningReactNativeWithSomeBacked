import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, amount, date }) {
  // creation navigation object so that access to navigation
  const navigation = useNavigation();
  function itemPressHandler() {
    navigation.navigate("ManageExpense", { expenseId: id });
  }

  return (
    <View style={{ marginVertical: 12 }}>
      <Pressable
        onPress={itemPressHandler}
        android_ripple={{ color: "#f1f1f1" }}
        style={{ borderRadius: 6 }}
      >
        <View style={styles.expenseItem}>
          <View>
            <Text style={styles.textArea}>{description}</Text>
            <Text style={styles.textArea}>{date}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>${amount}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    backgroundColor: "#501af356",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#f1f1f1",
    shadowOffset: { width: 0, heigth: 1 },
    shadowOpacity: 0.4,
    padding: 16,
  },
  textArea: {
    color: "#fff",
    padding: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    padding: 12,
  },
  amountContainer: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 90,
  },
  amount: {
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    paddingHorizontal: 6,
    minWidth: 80,
    marginRight: 20,
    backgroundColor: "#5fa6f1f1",
    borderRadius: 7,
  },
});

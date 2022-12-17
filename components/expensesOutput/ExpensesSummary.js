import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  // find total expenses from array using reduce method
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.summary}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#f52aaa",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summary: {
    fontSize: 16,
    color: "#fffff5",
    fontWeight: "bold",
  },
  period: {
    fontSize: 12,
    color: "#fff",
  },
});

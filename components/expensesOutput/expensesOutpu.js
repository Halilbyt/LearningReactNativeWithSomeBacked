import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ExpensesList from "./ExpenseList";
import ExpensesSummary from "./ExpensesSummary";
import { useSelector } from "react-redux";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#712362",
    paddingTop: 24,
  },
  infoText: {
    fontSize: 16,
    marginTop: 32,
    color: "#fff",
    textAlign: "center",
    padding: 8,
    backgroundColor: "#f90",
    borderRadius: 7,
  },
});

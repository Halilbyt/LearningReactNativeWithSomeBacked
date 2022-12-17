import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ExpensesOutput from "../components/expensesOutput/expensesOutpu";
function AllExpenses({ expenses }) {
  const allData = useSelector((state) => state.allExpenses.expensesData);
  return (
    <ExpensesOutput
      fallbackText="There is no expenses that registered!"
      expenses={allData}
      expensesPeriod="Total"
    />
  );
}

export default AllExpenses;

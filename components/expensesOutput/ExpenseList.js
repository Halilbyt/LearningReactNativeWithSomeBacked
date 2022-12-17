import { Text, FlatList } from "react-native";
import ExpenseItem from "./expenseItem";

function renderExpenseItems(itemData) {
  const { description, date, amount } = itemData.item;
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItems}
    />
  );
}

export default ExpensesList;

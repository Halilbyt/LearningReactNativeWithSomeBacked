import { useLayoutEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import IconButton from "../components/UI/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addExpenses, removeExpenses, updateExpenses } from "../store/slicer";
import DateHandler from "../util/date";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense } from "../util/http";

function ManageExpense({ route, navigation }) {
  const expensesDataBank = useSelector(
    (state) => state.allExpenses.expensesData
  );

  const dispatch = useDispatch();

  const checkedExpenseId = route.params?.expenseId;
  const isEditing = !!checkedExpenseId; // convert the value a booleanexpense.date

  // getting properties of clicked element
  const selectedData = expensesDataBank.find(
    (item) => item.id === checkedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    dispatch(removeExpenses({ id: checkedExpenseId }));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    if (isEditing) {
      dispatch(updateExpenses({ ...expenseData, id: checkedExpenseId }));
    } else {
      const id = await storeExpense(expenseData); // we sending data to server and it function return us the id property
      dispatch(addExpenses({ ...expenseData, id }));
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Edit" : "Add"}
        onCancel={cancelHandler}
        selectItemInfo={selectedData}
      />

      {isEditing && (
        <View style={styles.deleteButton}>
          <IconButton
            icon="trash"
            color="#f90"
            size={34}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#312132",
  },
  deleteButton: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#5171a5",
    alignItems: "center",
  },
});

// not:Why we use useEffect or useLayoutEffect:
// navigation setOptions should not call inside a function alone instead using useLayoutEffect or useEffect function from react
// then we useing function inside it and set the parameters that may change; accordingly its parameters page will be rendered

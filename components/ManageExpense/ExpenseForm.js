import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/button";
import { Alert } from "react-native";

function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  selectItemInfo,
}) {
  // collection all entered data in object
  const [inputValues, setInputValues] = useState({
    amount:
      submitButtonLabel === "Edit" ? selectItemInfo.amount.toString() : "",
    date: submitButtonLabel === "Edit" ? selectItemInfo.date : "",
    description: submitButtonLabel === "Edit" ? selectItemInfo.description : "",
  });

  // using input identifier to verify the entered data label to achive the fulfill object attributes.
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((currentInputValue) => {
      return {
        ...currentInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  // we send data to ManageExpense component via props to use in the function.
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: inputValues.date,
      description: inputValues.description,
    };

    // Before sending the data we must validate the data.
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dataIsValid =
      new Date(expenseData.date).toString() !== "Invalid Date";
    const descIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dataIsValid || !descIsValid) {
      Alert.alert(
        "Invalid Input",
        "Please check your inputs and fulfill the blank areas accordingly to their format"
      );
      return; // for the not execute the function we must add return
    }
    onSubmit(expenseData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textArea}>Your Expense</Text>
      <View style={styles.priceDate}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
          autoCapitalize: "sentences",
          maxLength: 50,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttonArea}>
        <Button style={styles.buttons} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.buttons} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  container: { marginBottom: 10, marginTop: 30 },
  priceDate: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textArea: {
    fontSize: 30,
    marginBottom: 30,
    marginHorizontal: 5,
    marginVertical: 10,
    textAlign: "center",
    color: "#E5B8F4",
    fontWeight: "bold",
  },
  buttonArea: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    minWidth: 125,
    marginHorizontal: 25,
  },
});

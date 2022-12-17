import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_EXPENSES } from "../data/dummy_expenses";
import { fetchExpenses } from "../util/http";

// getting initial data
async function getExpense() {
  const expenses = await fetchExpenses();
  return expenses;
}
const initialData = getExpense();

const ExpensesSlc = createSlice({
  // git it a name whatever you want
  name: "expenses",
  // starting the initial state and its value which is emty array this example.
  initialState: {
    expensesData: [],
  },
  // we describe actions (functions-operations) inside the reducers as object params.
  reducers: {
    addExpenses: (state, action) => {
      state.expensesData.push({
        id: action.payload.id,
        description: action.payload.description,
        amount: action.payload.amount,
        date: action.payload.date,
      });
    },
    removeExpenses: (state, action) => {
      state.expensesData = state.expensesData.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    setExpenses: (state, action) => {
      const reOrderedData = action.payload.expenses.reverse(); // sorted data
      state.expensesData = reOrderedData;
    },
    updateExpenses: (state, action) => {
      // update whole arr note: do not reassignment the state
      state.expensesData.map((item) => {
        if (item.id === action.payload.id) {
          item.id = action.payload.id;
          item.description = action.payload.description;
          item.amount = action.payload.amount;
          item.date = action.payload.date;
        }
      });
    },
  },
});

// action parameter can hold an extra payload which we can pass along when invoking this method later!
// action keyword usage => action.payload.(put data we gonna use) : use of payload property to transport any extra data we might attach to this function in the future.
// state.data that we can access the data array and make some logic operation.

export default ExpensesSlc.reducer;

export const { addExpenses, removeExpenses, updateExpenses, setExpenses } =
  ExpensesSlc.actions;

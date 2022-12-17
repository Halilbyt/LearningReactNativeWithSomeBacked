import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./slicer";

const Store = configureStore({
  reducer: {
    allExpenses: expensesReducer,
  },
});

export default Store;

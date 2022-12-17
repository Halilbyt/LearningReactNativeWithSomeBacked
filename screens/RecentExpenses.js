import { useEffect } from "react";
import { setExpenses } from "../store/slicer";
import { useSelector, useDispatch } from "react-redux";
import ExpensesOutput from "../components/expensesOutput/expensesOutpu";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
function RecentExpenses() {
  const dataStore = useSelector((state) => state.allExpenses.expensesData);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getExpense() {
      const expenses = await fetchExpenses();
      dispatch(setExpenses({ expenses: expenses }));
    }

    getExpense();
  }, []);

  // filtering recent expenses in last 6 months
  const recentExpenses = dataStore.filter((expense) => {
    const today = new Date();
    const date6Months = getDateMinusDays(today, 6);
    return new Date(expense.date) > date6Months;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 6 Months"
      fallbackText="There is no expenses accordingly last 6 months"
    />
  );
}

export default RecentExpenses;

/* note:
fatchExpenses function yields a promise now.. that means we can now wait
for this promise to resolve to get hold of the actual data that wast returned
To get hold the data we can use async await here as well
we do not sould turn this effect function into async function which is note recommaned by react team.
Therefore we add  new function in the effect funciton await for the response after that execute function.

*/

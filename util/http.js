import axios from "axios";

const BACKEND_URL =
  "https://react-native-dummybackend-default-rtdb.europe-west1.firebasedatabase.app";

// sending data to database
export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name; // to get the id that created automatic by firebase API
  // '.json' extension come from firebase because its required to json file extension to work with.
  // /expenses.json part translate as nodes or the folder in database
  // this database actualy is API that behave like db so we deal with it.
  return id;
}

// getting data from database
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  //   console.log(response);
  //   console.log("*****************");
  //   console.log(response.data);
  //   console.log("*******************");
  for (let key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

// updating data from database
export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

// deleting data from database
export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}

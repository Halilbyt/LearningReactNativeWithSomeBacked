import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./screens/AllExpenses";
import { NavigationContainer } from "@react-navigation/native";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
import { Provider } from "react-redux";
import Store from "./store/store";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    // ********* Different Navigation object usage inside Navigator so screen options  ***********
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#512352" },
        headerTintColor: "#f1f1f1",
        tabBarStyle: { backgroundColor: "#512352" },
        tabBarActiveTintColor: "#2ff",
        headerRight: ({ size, color }) => (
          <IconButton
            icon="md-add-circle-sharp"
            size={35}
            color="#f1f1f1"
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="md-receipt-sharp" size={size} color={color} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="md-file-tray-full" size={size} color={color} />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#512352" },
              headerTintColor: "#f1f1f1",
            }}
          >
            <Stack.Screen
              name="ExpenseOverview"
              component={ExpenseOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

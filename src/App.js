import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const Maunal_Entry = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
    location: "Super-Market",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Online",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Insurance-office",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
    location: "Main-market",
  },
  {
    id: "e5",
    title: "New Laptop",
    amount: 45000,
    date: new Date(2023, 5, 12),
    location: "Electronics-market",
  },
];

function App() {
  const [expenses, addMoreExpense] = useState(Maunal_Entry);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    addMoreExpense((prevExpense) => {
      return [expense, ...prevExpense];
      //here expense is the data which we add from web, and prevExpense is which add from IED
      //and when our data is depend upon prev state, this is the way to get the latest snapshot and not stucking in an error.
    });
  };
  //what we actually doing is, first we make a communication b/w ExpenseForm component and Expenses component, and then we make a communication b/w App component with Expense component, so now App component have the value which ix coming from the child component of Expense i.e ExpenseForm component
  return (
    <div className="App">
      <header className="App-header">
        <Expenses
          items={expenses}
          onAddExpense={addExpenseHandler}
          //Here we passing our expenses array down in the Expenses via props i.e items here
        />
      </header>
    </div>
  );
}

export default App;

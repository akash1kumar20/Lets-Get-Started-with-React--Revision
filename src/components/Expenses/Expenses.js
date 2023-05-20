import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseForm from "./ExpenseForm";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const saveExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      //this is data coming from savaData from ExpenseForm component
      id: Math.random().toString(),
      //our others elements have id too, that's why we also add id on the new element, which user add.
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
    //so our form gets clear after user submit the details
  };

  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
    //because our filtereYear have value in string, then we convert our object value into string.
  });

  const [isEditing, setIsEditing] = useState(false);
  const startSubmiting = () => {
    setIsEditing(true);
  };
  //when user click on Add New Expense button, then user gets a portion to submit values
  const stopSubmiting = () => {
    setIsEditing(false);
  };
  //if click on cancel button, inside form, the form gets deleted.

  return (
    <Card className="expenses">
      {!isEditing && (
        <div className="new-expense">
          <button onClick={startSubmiting} className="new-expense button">
            Add New Expense
          </button>
        </div>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopSubmiting}
        />
      )}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;

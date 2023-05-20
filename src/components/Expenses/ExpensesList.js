import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__feedback">Found No Expense</h2>;
  }
  if (props.items.length === 1) {
    return (
      <ul className="expense-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            location={expense.location}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
        <h2>Only single Expense here. Please add more...</h2>
      </ul>
    );
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          location={expense.location}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;

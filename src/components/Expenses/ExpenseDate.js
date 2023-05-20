import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  //here props is which we take as permater and date help us to take out the month from it because we use date in the App.js, and then we convert it into the string, en-US means that we're using english langugage in US accent, then curly bracket, is used to give the insturctions that, give us month and long means give the full name of the month, like January not Jan.
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  //for year we don't need to specify anything beacause it give us the result in the format - 1947 and that's we want.

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
  //now we can use date component anywhere in our file, we don't have to create it again & again.
}

export default ExpenseDate;

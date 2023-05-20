function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;
  return (
    <div>
      <div>{title}</div>
      <div>{location}</div>
      <div>{amount}</div>
    </div>
  );
}
export default ExpenseDetails;

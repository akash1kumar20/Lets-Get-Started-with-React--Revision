import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const [titleStore, changeTitle] = useState(props.title);
  //element 1 i.e titleStore is a pointer to managed value, it have props.title value
  //element 2 i.e changeTitle is the async function which is used to change the value, it also re-renders the screen aftertime it get exceuted.
  //useState is a Hook function, which have inital value i.e props.title which is coming from ExpenseDetails component

  const titleChanger = () => {
    changeTitle("New Title!");
    //doing it by this way, because now react will not only change the value, but also call our component again and that's we want.
    console.log(titleStore);
  };

  const [amountStore, changeAmount] = useState(props.amount);

  const amountChanger = () => {
    changeAmount(100);
  };

  const [locationStore, afterDeletion] = useState(props.location);

  const deleteItem = () => {
    afterDeletion(" ");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>
          <ExpenseDetails title={titleStore} />
        </h2>
        <div>
          <ExpenseDetails location={locationStore} />
        </div>
        <div className="expense-item__price">
          <ExpenseDetails amount={"₹" + amountStore} />
        </div>
      </div>

      <div className="expense-item__button">
        <button onClick={titleChanger}>Change Title</button>
      </div>
      <div className="expense-item__button">
        <button onClick={amountChanger}>Change Amount</button>
      </div>
      <div className="expense-item__button_delete">
        <button onClick={deleteItem}>Delete Location</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;

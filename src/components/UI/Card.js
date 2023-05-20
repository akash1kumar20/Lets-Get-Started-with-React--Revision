import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  //whenever we apply this card component on the other component to wrap their data, we have to make sure that the classes of css that's already apply on the component, would not get effected. To do that we make a variable (classes), which have default class i.e card and all the other classes applied on the other component.

  return <div className={classes}>{props.children}</div>;
  //here props children store the content:
  //(<ExpenseDate date={props.date} />
  // <div className="expense-item__description">
  //   <h2>
  //     <ExpenseDetails title={titleStore} />
  //   </h2>
  //   <div>
  //     <ExpenseDetails location={locationStore} />
  //   </div>
  //   <div className="expense-item__price">
  //     <ExpenseDetails amount={"₹" + amountStore} />
  //   </div>
  // </div>

  // <div className="expense-item__button">
  //   <button onClick={titleChanger}>Change Title</button>
  // </div>
  // <div className="expense-item__button">
  //   <button onClick={amountChanger}>Change Amount</button>
  // </div>
  // <div className="expense-item__button_delete">
  //   <button onClick={deleteItem}>Delete Location</button>
  // </div>)
};

export default Card;

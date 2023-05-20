import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [dateBefore, dateAfter] = useState("");
  //here we're storing string not a number because when we read the input onChange event, it always give us data in the form of string, even we paased number into it.
  const dateChanger = (event) => {
    dateAfter(event.target.value);
  };
  const [titleBefore, titleAfter] = useState("");
  const titleChanger = (event) => {
    titleAfter(event.target.value);
  };
  const [amountBefore, amountAfter] = useState("");
  const amountChanger = (event) => {
    amountAfter(event.target.value);
  };
  const [locationBefore, locationAfter] = useState("");
  const locationChanger = (event) => {
    locationAfter(event.target.value);
  };

  // const [userInput, setUserInput] = useState({
  //     titleBefore: '',
  //     amountBefore: '',
  //     dateBefore: '',
  //     locationBefore: ''
  //to single state, we have to pass object inside the useState function, which initial have everything blank value.
  // })
  // const titleChanger = (event) => {
  //    setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //    })
  // we have to call value changer function inside every event function, and we have to copy the previous value as well, so they don't get lost and the value which we want to change is also get changed.
  //by doing this, there is a problem, when there are too many schedules, we get depended on the outer/later snapshot, so might be we don't get the data that we want.
  //to provide that situation, we use:
  //inside in our updating function, we pass another function
  //setUserInput((prevState) => {
  //   return {...prevState, titleBefore: event.target.value}
  // })
  //now our function also store the previous state, and as well as it will give the snapshot of the latest version.
  // }
  // const amountChanger = (event) => {
  //     setUserInput({
  //         ...userInput,
  //         enteredAmount: event.target.value,
  //        })
  // }
  // const dateChanger = (event) => {
  //     setUserInput({
  //         ...userInput,
  //         enteredDate: event.target.value,
  //        })
  // }
  const saveData = (event) => {
    event.preventDefault();
    //whenever the form is submitted, page get refresh because browser sent request to the server, to avoid that we use preventDefault.
    let newObj = {
      date: new Date(dateBefore),
      location: locationBefore,
      amount: +amountBefore,
      //when we add multiple values, then they add as a string, to avoid that we use +
      title: titleBefore,
    };
    props.onSaveExpenseData(newObj);
    //onSaveExpenseData we used in Expenses component to make a communication from child to parent component
    dateAfter("");
    amountAfter("");
    locationAfter("");
    titleAfter("");
    //now we call our changer function with empty string and also set the value in every input tag equal to their value, this is called two-way binding, it help us to store the value as well as to clear to value after the submission, so every time user get a free space to enter new value.
  };
  return (
    <form onSubmit={saveData}>
      <div className="new-expense">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Select Date</label>
            <input
              type="date"
              id="date"
              min="2023-0-1"
              value={dateBefore}
              onChange={dateChanger}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Add Title</label>
            <input
              type="text"
              id="title"
              value={titleBefore}
              onChange={titleChanger}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Add location</label>
            <input
              type="text"
              id="location"
              value={locationBefore}
              onChange={locationChanger}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Add Amount</label>
            <input
              type="number"
              id="amount"
              min="0"
              value={amountBefore}
              onChange={amountChanger}
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

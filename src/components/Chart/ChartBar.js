import React from "react";
import "./ChartBar.css";
function ChartBar(props) {
  let heightFill = "0%";
  //here we don't use it as a number, because it define the CSS style.

  if (props.maxValue > 0) {
    //when the bar have value greater then zero, we have to increase it's height, so:
    heightFill = Math.round((props.value / props.maxValue) * 100) + "%";
    //we're calculating that how much percentage of bar is going to fill.
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: heightFill }}
          //this div is used to defined how much bar is going to fill/the height of bar.
          //its height depends on the data we recieve, currently it's 100%.
          //stlye is a CSS attribute, and to add value dynamically we use double {}, which update the style dynamically.
          //to use another property like { height: heightFill, backgroundColor : 'red' }, we must use camel case version for property name, or wrap it inside ''.
        ></div>
      </div>
      <div className="chart-bar__label">
        {
          props.label
          //this div is used to take the label from the chart
        }
      </div>
    </div>
  );
}
export default ChartBar;

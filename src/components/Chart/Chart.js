import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const dataValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  //converting the object into just number
  //dataPoints will now return any array of just numbers
  const maxData = Math.max(...dataValue);
  //   console.log(maxData);
  //finding out the max value from dataValue array
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxData}
          label={dataPoint.label}
        />
        //our props has the component which recieve the value in an array and now we can create ChartBar dynamically, and we can create as many ChartBar as many dataPoint we recieved.
        //value is to define that what kind of data we required for our ChartBar
        //maxValue is used to find the max value in realtion to all the dataPoint of the chart.
        //label is used to describe the name of months
        //key is used to give the unique identity to our items, as we're mapping our array.
        //we use label to give unique idenity to our component.
      ))}
    </div>
  );
}
export default Chart;

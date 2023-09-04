import React from "react";
import ReactDOM from "react-dom";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
import * as Calculator from "./calculator.js";

ReactDOM.render(
  <ul>
    <li>{Calculator.add(1, 2)}</li>
    <li>{Calculator.multiply(2, 3)}</li>
    <li>{Calculator.subtract(7, 2)}</li>
    <li>{Calculator.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

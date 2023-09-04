import React from "react";
import ReactDOM from "react-dom";
import * as PI from "./math.js";

console.log(PI);

ReactDOM.render(
  <ul>
    <li>{PI.default}</li>
    <li>{PI.doublePi()}</li>
    <li>{PI.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

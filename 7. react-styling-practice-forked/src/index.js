import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2019, 1, 1, 13);
const hr = date.getHours();

let customStyle = { color: "" };
let customText = "";

if (hr < 12) {
  customStyle.color = "red";
  customText = "Good Morning";
} else if (hr < 18) {
  customStyle.color = "green";
  customText = "Good Afternoon";
} else {
  customStyle.color = "blue";
  customText = "Good Night";
}

ReactDOM.render(
  <h1 class="heading" style={customStyle}>
    {customText}
  </h1>,
  document.getElementById("root")
);

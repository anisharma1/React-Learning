import React from "react";
import ReactDOM from "react-dom";

const fname = "Anisha";
const lname = "Sharma";
const number = Math.floor(Math.random() * 10);
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>Your lucky number is {number}</p>
    <p>Other numbers: {3 + 4}</p>
  </div>,
  document.getElementById("root")
);

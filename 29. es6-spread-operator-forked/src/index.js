import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];
//console.log(fruits);

const fullName = {
  fname: "James",
  lname: "Bond"
};
const user = {
  ...fullName,
  id: 1,
  username: "007"
};
//console.log(user);

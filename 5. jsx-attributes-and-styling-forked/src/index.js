import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200?grayscale";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Flowers</h1>
    <img src={img} alt="random"></img>
  </div>,
  document.getElementById("root")
);

import React, { useState } from "react";

function App() {
  const [timeNow, setTime] = useState("TIME");

  function displayTime() {
    const options = { hour12: false };
    setTime(new Date().toLocaleTimeString([], options));
  }

  function updateEverySecond() {
    displayTime();
  }
  setInterval(updateEverySecond, 1000);

  return (
    <div className="container">
      <h1>{timeNow}</h1>
      <button onClick={updateEverySecond}>Get Time</button>
    </div>
  );
}

export default App;

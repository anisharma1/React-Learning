import React, { useState } from "react";

function App() {
  //useState is a hook
  const [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
  }
  function decCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={incCount}>+</button>
      <button onClick={decCount}>-</button>
    </div>
  );
}

export default App;

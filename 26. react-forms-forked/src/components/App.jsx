import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault(); //prevents the default refresh
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name} //comtrolled component
        />
      </form>
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;

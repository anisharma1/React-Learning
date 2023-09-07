import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function updateFullName(event) {
    const { value, name } = event.target;
    setFullName((prevVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevVal.lName
        };
      } else {
        return {
          fName: prevVal.fName,
          lName: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFullName}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={updateFullName}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

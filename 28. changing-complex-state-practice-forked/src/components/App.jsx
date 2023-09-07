import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setContact((prevVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevVal.lName,
          email: prevVal.email
        };
      } else if (name === "lName") {
        return {
          fName: prevVal.fName,
          lName: value,
          email: prevVal.email
        };
      } else {
        return {
          fName: prevVal.fName,
          lName: prevVal.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

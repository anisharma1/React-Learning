import React from "react";
import InputElement from "./InputElement";

function Login() {
  return (
    <form className="form">
      <InputElement type="text" placeholder="Username" />
      <InputElement type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

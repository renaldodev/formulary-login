import React from "react";
import "./styles.css";
import Login from "./components/login";
import LoginFormik from "./components/loginFormik";
export default function App() {
  const values = {
    email: "",
    password: ""
  };

  function onsubmit(data) {
    console.log(data);
  }
  return (
    <div className="App">
      <LoginFormik initialValue={values} handleSubmit={onsubmit} />
    </div>
  );
}

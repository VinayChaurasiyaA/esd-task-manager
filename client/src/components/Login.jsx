import React from "react";
import axios from "axios";

import "./home.css";
const Login = () => {
  const getDataOfUser = async () => {
    await axios
      .get("http://localhost:5000/login", {
        name: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="login">
        <form action="POST">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
        </form>
        <p>
          Don't have an account?
          <a href="/sign"> Signup</a>
        </p>
        <button onClick={() => {}}>Submit</button>
      </div>
    </div>
  );
};

export default Login;

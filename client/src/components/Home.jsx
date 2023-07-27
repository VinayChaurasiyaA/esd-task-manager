import React from "react";
import { Link } from "react-router-dom";

import "./home.css";
const Home = () => {
  return (
    <div>
      <nav>
        <div className="logo">TaskSys</div>
        <div className="logins">
          <Link to="/login">Login</Link>
          <Link to="/sign">Signup</Link>
        </div>
      </nav>
      <div>
        This is a task managing system We will have more details about it..
        coming soom
      </div>
    </div>
  );
};

export default Home;

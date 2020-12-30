import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

function App() {
  const [users, setUser] = useState(null);

  // use async functon to fetch user data from github api
  async function fetchUserData() {
    axios.get("https://api.github.com/users").then((res) => {
      // update the users state with the data from api
      setUser(res.data);
    });
  }

  // get user data using the fore-declared functions
  useEffect(() => {
    fetchUserData();
  });

  return (
    <div className="App">
      <Navbar title="Hubr" icon="fab fa-github" />
      <div className="container">
        <Users users={users} />
      </div>
    </div>
  );
}

export default App;

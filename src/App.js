import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

function App() {
  const [users, setUsers] = useState("");
  const [error, setError] = useState(null);

  // // use async functon to fetch user data from github api
  // async function fetchUserData() {
  //   axios
  //     .get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     )
  //     .then((res) => {
  //       // update the users state with the data from api
  //       setUser(res.data);
  //     });
  // }

  // // get user data using the fore-declared functions
  // useEffect(() => {
  //   fetchUserData();
  // });

  const searchUsers = async (text) => {
    if (text.length === 0) {
      return setError("Empty searches are not allowed.");
    }

    setError(null);
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        // update the users state with the data from api
        setUsers(res.data.items);
      })
      .catch((reason) => {});
  };

  const clearUsers = () => {
    setUsers("");
  };

  return (
    <div className="App">
      <Navbar title="Hubr" icon="fab fa-github" />
      <div className="container">
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          showClear={users.length > 0 ? true : false}
        />
        <Users users={users} />
      </div>
    </div>
  );
}

export default App;

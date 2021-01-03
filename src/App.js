import React, { useState, Fragment } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";

const App = () => {
  const [users, setUsers] = useState("");
  const [error, setError] = useState(null);
  const [userProfile, setUserProfile] = useState("");
  const [userRepos, setUserRepos] = useState([]);

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

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
  };

  //get github user profile
  const getUser = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUserProfile(res.data);
    // console.log(res.data);
    getUserRepos(username);
  };

  const getUserRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUserRepos(res.data);
  };

  const clearUsers = () => {
    setUsers("");
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="Hubr" icon="fab fa-github" />
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Fragment>
                  {error && <p style={{ color: "red" }}>Error: {error}</p>}
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                  />
                  <Users users={users} />
                </Fragment>
              )}
            />
            <Route path="/about" exact component={About} />
            <Route
              path="/user/:login"
              exact
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  userProfile={userProfile}
                  userRepos={userRepos}
                  getUserRepos={getUserRepos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

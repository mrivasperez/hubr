import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubState from "./context/github/GithubState";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";

const App = () => {
  return (
    <GithubState>
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
                    {/* {error && <p style={{ color: "red" }}>Error: {error}</p>} */}
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route path="/about" exact component={About} />
              <Route path="/user/:login" exact component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;

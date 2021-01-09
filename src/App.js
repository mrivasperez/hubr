import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubState from "./context/github/GithubState";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound404 from "./components/pages/NotFound404";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Hubr" icon="fab fa-github" />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/user/:login" exact component={User} />
              <Route component={NotFound404} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Navbar title="Hubr" icon="fab fa-github" />

      <div className="container">
        <Users />
      </div>
    </div>
  );
}

export default App;

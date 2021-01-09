import { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = (props) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onInputChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    githubContext.searchUsers(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          onChange={onInputChange}
          value={text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

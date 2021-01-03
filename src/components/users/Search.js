import { useState } from "react";

const Search = ({ searchUsers, showClear, clearUsers }) => {
  const [text, setText] = useState("");

  const onInputChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
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
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

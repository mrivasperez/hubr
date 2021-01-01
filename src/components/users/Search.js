import { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.searchUsers(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
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
      {!props.showClear ? null : (
        <button className="btn btn-light btn-block" onClick={props.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

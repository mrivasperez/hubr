import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { SEARCH_USERS, CLEAR_USERS, GET_REPOS, GET_USER } from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    userProfile: {},
    repos: [],
    error: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //search users
  const searchUsers = async (text) => {
    if (text.length === 0) {
      return setError("Empty searches are not allowed.");
    }

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  //get user
  const getUser = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_USER, payload: res.data });
  };

  //get repos
  const getUserRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  };
  //clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setError = (error) => alert(error);

  // use provider
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        userProfile: state.userProfile,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

import { SEARCH_USERS, CLEAR_USERS, GET_REPOS, GET_USER } from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    case GET_USER:
      return {
        ...state,
        userProfile: action.payload,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };

    default:
      return state;
  }
};

export default githubReducer;

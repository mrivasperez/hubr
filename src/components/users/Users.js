import { useContext } from "react";

import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

const Users = (props) => {
  const githubContext = useContext(GithubContext);

  return !githubContext.users ? null : (
    <div style={userStyle}>
      {githubContext.users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;

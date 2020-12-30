import { useState } from "react";
import UserItem from "./UserItem";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

const Users = (props) => {
  const [users] = useState([
    {
      login: "mojombo",
      id: 1,
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
    },
    {
      login: "defunkt",
      id: 2,
      avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
      html_url: "https://github.com/defunkt",
    },
    {
      login: "pjhyett",
      id: 3,
      avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
      html_url: "https://github.com/pjhyett",
    },
  ]);

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem {...user} />
      ))}
    </div>
  );
};

export default Users;

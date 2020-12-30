import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

const Users = (props) => {
  return !props.users ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {props.users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;

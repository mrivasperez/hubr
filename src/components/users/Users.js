import UserItem from "./UserItem";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

const Users = (props) => {
  return !props.users ? null : (
    <div style={userStyle}>
      {props.users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;

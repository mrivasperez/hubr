import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <div className="card text-center">
      <img
        src={props.avatar_url}
        className="round-img"
        alt={props.login}
        style={{ width: "60px" }}
      />
      <h3>{props.login}</h3>
      <div>
        <Link to={`/user/${props.login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;

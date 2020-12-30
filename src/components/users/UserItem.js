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
        <a href={props.html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;

import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  //   console.log(props);
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
  }, []); // <-- I passed in empty array as second argument so that it would not render over and over again, I will clean it up lated !! TODO
  console.log(props.userRepos);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = props.userProfile;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>

      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "150px" }}
            alt={name}
          />
          <h1>{name}</h1>

          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark my-1"
          >
            Visit Github Profile
          </a>

          <ul>
            <li>
              <Fragment>
                <strong>Username:</strong> {login}
              </Fragment>
            </li>{" "}
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  <a href={`https://${blog}`}> {blog}</a>
                </Fragment>
              )}
            </li>
            <p>
              <strong>Seeking Employment: {""}</strong>
              {hireable ? (
                <i className="fas fa-check text-success" />
              ) : (
                <i className="fas fa-times-circle text-danger" />
              )}
            </p>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
    </Fragment>
  );
};

export default User;
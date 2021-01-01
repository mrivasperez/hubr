import RepoItem from "./RepoItem";

const Repos = ({ userRepos }) => {
  return userRepos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon} /> {props.title}
      </h1>
    </nav>
  );
};

export default Navbar;

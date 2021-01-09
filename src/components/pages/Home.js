import React, { Fragment } from "react";

import Users from "../users/Users";
import Search from "../users/Search";

const Home = (props) => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);
export default Home;

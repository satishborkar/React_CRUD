import React from "react";
import { Link } from "react-router-dom";

export default (
  <ul className="menu">
    <li>
      <Link exact="true" to="/dashboard">
        Home
      </Link>
    </li>
    <li>
      <Link to="/profile">Profile </Link>
    </li>
    <li>
      <Link to="/contacts"> Contact Details </Link>
    </li>
    <li className="pull-right">
    <Link to="/contacts"> log Out </Link>
  </li>
  </ul>
);

import React from "react";
import { Link } from "react-router-dom";

export default (
  <ul className="menu">
    <li>
      <Link exact="true" to="/">Users</Link>
    </li>
    <li>
      <Link to="/invitations">Invitations </Link>
    </li>
    <li>
      <Link to="/helpcenter"> Help Center </Link>
    </li>
  </ul>
);

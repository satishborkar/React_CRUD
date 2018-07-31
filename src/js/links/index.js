import React from "react";
import { Link } from "react-router-dom";
import store from "../store";
import * as actionsTypes from "../actions/types";

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
      <a href="javascript:void(0)" onClick={function () {
        store.dispatch({ type: actionsTypes.LOGOUT })
      }}>log Out </a>
    </li>
  </ul>
);

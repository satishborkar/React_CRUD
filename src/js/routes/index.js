import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { history } from "../helper/history";

import Login from "../containers/Login";
import Home from "../containers/Home";
import AddNew from "../containers/Add";
import EditUser from "../containers/EditUser";
import Invitations from "../containers/Invitations";
import HelpCenter from "../containers/HelpCenter";

export default (
  <Switch history={history}>

    <Route exact path="/" component={Login} />
    <PrivateRoute path="/dashboard" component={Home} />
    <PrivateRoute path="/new" component={AddNew} />
    <PrivateRoute path="/edit/:id" component={EditUser} />
    <PrivateRoute path="/invitations" component={Invitations} />
    <PrivateRoute path="/helpcenter" component={HelpCenter} />

  </Switch>
);

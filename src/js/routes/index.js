import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../containers/Home";
import AddNew from "../containers/Add";
import EditUser from "../containers/EditUser";
import Invitations from "../containers/Invitations";
import HelpCenter from "../containers/HelpCenter";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/new" component={AddNew} />
    <Route path="/edit/:id" component={EditUser} />
    <Route path="/invitations" component={Invitations} />
    <Route path="/helpcenter" component={HelpCenter} />
  </Switch>
);

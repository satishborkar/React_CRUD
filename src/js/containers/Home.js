import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../actions/actionCreator";
import Grid from "../components/common/Grid";
import StatusType from "../components/common/StatusType";

class Home extends Component {
  constructor(props) {
    super(props);

    this._deleteUser = this._deleteUser.bind(this);
    this._editUser = this._editUser.bind(this);
    this._addNew = this._addNew.bind(this);
  }
  componentWillMount() {
    this.props.actions.getAllUsers();
  }

  _editUser(user) {
    this.props.history.push("/edit/" + user.id);
  }

  _addNew() {
    this.props.history.push("/new");
  }

  _deleteUser(id) {
    //console.log(id);
    this.props.actions.deleteUserById(id);
  }

  render() {
    return (
      <div>
        <div className="grid-title">
          <h2>Users List</h2>
          <div className="pull-right">
            <button className="btn" onClick={this._addNew}>
              Add New
            </button>
          </div>
        </div>
        <div className="grid-holder">
          <Grid
            data={this.props.users}
            deleteUser={this._deleteUser}
            editUser={this._editUser}
          />
          <StatusType />
        </div>
      </div>
    );
  }

  static propTypes = {
    users: PropTypes.array
  };
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
function mapDispatchToProps(dispatch) {
  var obj = {
    actions: bindActionCreators(actionCreator, dispatch)
  };

  return obj;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

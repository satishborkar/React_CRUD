import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../actions/actionCreator";
import Form from "../components/common/Form";

class AddNew extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      status: ""
    };

    this._clearFrm = this._clearFrm.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _clearFrm() {
    document.forms[0].reset();
    this.props.history.goBack();
  }

  _handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  _onSubmit(e) {
    e.preventDefault();
    //console.log(this.refs.status.value);
    const newUser = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      status: this.refs.status.value
    };
    this.props.actions.addUser(newUser);
    this._clearFrm();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="grid-title">
          <h2>Add New User</h2>
        </div>
        <div className="grid-holder">
          <div className="fill-25">
            {/* <Form clearFrm={this._clearFrm} onSubmit={this._onSubmit} ref={form} /> */}
            <form onSubmit={this._onSubmit}>
              <div className="row pull-left frm-flield">
                <div className="col-5 pull-left">
                  <input
                    type="text"
                    name="firstName"
                    ref="firstName"
                    onChange={this._handleChange}
                  />
                  <div className="label">
                    <label>First Name </label>
                  </div>
                </div>
                <div className="col-5 pull-left">
                  <input
                    type="text"
                    name="lastName"
                    ref="lastName"
                    onChange={this._handleChange}
                  />
                  <div className="label">
                    <label>Last Name </label>
                  </div>
                </div>
              </div>
              <div className="row pull-left frm-flield">
                <div className="col-5 pull-left">
                  <input
                    type="text"
                    name="email"
                    ref="email"
                    onChange={this._handleChange}
                  />
                  <div className="label">
                    <label>Email </label>
                  </div>
                </div>
                <div className="col-5 pull-left">
                  <input
                    type="text"
                    name="phone"
                    ref="phone"
                    onChange={this._handleChange}
                  />
                  <div className="label">
                    <label>Phone </label>
                  </div>
                </div>
              </div>
              <div className="row pull-left frm-flield fill-bottom-25">
                <div className="col-5 pull-left">
                  <select ref="status" onChange={this._handleChange}>
                    <option value="inactive" defaultValue>
                      Inactive
                    </option>
                    <option value="active"> Active </option>
                  </select>
                  <div className="label">
                    <label>Status </label>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <button
                  className="btn"
                  type="submit"
                  disabled={
                    !this.state.firstName ||
                    !this.state.lastName ||
                    !this.state.email ||
                    !this.state.phone
                  }
                >
                  Save
                </button>
                <button className="btn" type="reset" onClick={this._clearFrm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);

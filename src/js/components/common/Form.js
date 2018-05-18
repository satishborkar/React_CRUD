import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="row pull-left frm-flield">
        <div className="col-5 pull-left">
          <input type="text" name="firstName" />
          <div className="label">
            <label>First Name </label>
          </div>
        </div>
        <div className="col-5 pull-left">
          <input type="text" name="lastName" />
          <div className="label">
            <label>Last Name </label>
          </div>
        </div>
      </div>
      <div className="row pull-left frm-flield">
        <div className="col-5 pull-left">
          <input type="text" name="email"  />
          <div className="label">
            <label>Email </label>
          </div>
        </div>
        <div className="col-5 pull-left">
          <input type="text" name="phone" />
          <div className="label">
            <label>Phone </label>
          </div>
        </div>
      </div>
      <div className="row pull-left frm-flield fill-bottom-25">
        <div className="col-5 pull-left">
          <select ref="status">
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
        <button className="btn" type="submit">
          Save
        </button>
        <button className="btn" type="reset" onClick={props.clearFrm}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;

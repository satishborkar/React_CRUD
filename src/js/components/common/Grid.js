import React from "react";
import classnames from "classnames";
import LoaderHOC from "../../hoc/LoaderHOC";

const Grid = props => {
  const userList =
    (props.data.length > 0) ? (
      props.data.map((user, index) => {
        const userStatus =
          user.status == "active" ? "active-user" : "inactive-user";
        return (
          <tr key={index}>
            <td>
              <span
                className={classnames("dot", userStatus)}
                title="Inactive User"
              />
            </td>
            <td className="bold">
              {user.firstName} {user.lastName}
            </td>
            <td> {user.email} </td>
            <td> {user.phone} </td>
            <td className="action-link">
              <a
                href="javascript:void(0)"
                className="bold link"
                onClick={() => {
                  props.editUser(user);
                }}
              >
                Edit
              </a>
              |
              <a
                href="javascript:void(0)"
                className="bold link"
                onClick={() => {
                  props.deleteUser(user.id);
                }}
              >
                Delete
              </a>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="5" className="bold error-row">
         No record found!!
        </td>
      </tr>
    );
  return (
    <table className="user-list">
      <thead>
        <tr>
          <th>Status</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{userList}</tbody>
    </table>
  );
};

//export default LoaderHOC("data")(Grid);
export default Grid;

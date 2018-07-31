import React from "react";
import Links from "../../links";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>
          EMS <sub>2</sub>
          <small>system</small>
        </h1>
        {Links}
      </div>
    </div>
  );
};

export default Header;

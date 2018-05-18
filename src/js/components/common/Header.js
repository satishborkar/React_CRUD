import React from "react";

import Links from "../../links";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>
          evolent
          <small>Health</small>
        </h1>
        {Links}
      </div>
    </div>
  );
};

export default Header;

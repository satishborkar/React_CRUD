import React from "react";

const StatusType = (props) => {
  if(props.hidden){
    return null;
  }
  return (
    <div className="row dot-shrink">
      <span>
        <span className="dot active-user" /> Active
      </span>
      <span>
        <span className="dot inactive-user" /> Inactive
      </span>
    </div>
  );
};

export default StatusType;

import React from "react";
import "./User.css";
const User = (props) => {
  return (
    <div>
      <div className="user-item">
        <div>{props.userName}</div>
        <div>{props.age}</div>
      </div>
    </div>
  );
};

export default User;

import React from "react";
import "./User.css";
const User = (props) => {
  return (
    <div>
      <div className="user-item">
        <h2>{props.userName}</h2>
        <div>{props.age}</div>
      </div>
    </div>
  );
};

export default User;

import React from "react";

import classes from "./User.module.css";

const User = (props) => {
  return (
    <div className={classes.userItem}>
      <div>{props.userName}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default User;

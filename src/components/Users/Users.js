import React, { useState } from "react";
import User from "./User";
import "./Users.css";

const Users = (props) => {
  if (props.items.length === 0) {
    return <div className="empty-list-message">No Users</div>;
  }
  return (
    <li className="user-list">
      {props.items.map((expense) => (
        <User userName={expense.userName} age={expense.age} />
      ))}
    </li>
  );
};

export default Users;

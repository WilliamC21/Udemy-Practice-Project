import React, { useState } from "react";
import User from "./User";
import "./Users.css";

const Users = (props) => {
  if (props.items.length === 0) {
    return <h2>No Users</h2>;
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

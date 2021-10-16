import React, { useState } from "react";
import User from "./User";
import Card from "../UI/Card";
import "./Users.css";

const Users = (props) => {
  if (props.items.length === 0) {
    return <div className="empty-list-message">No Users</div>;
  }
  return (
    <Card>
      <ul className="userList">
        {props.items.map((user) => (
          <User userName={user.userName} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default Users;

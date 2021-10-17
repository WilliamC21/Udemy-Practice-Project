import React, { useState } from "react";
import User from "./components/Users/User";
import Users from "./components/Users/Users";
import NewUserForm from "./components/NewUser/NewUserForm";

const DUMMY_USERS = [
  {
    userName: "Bob",
    age: 12,
    id: Math.random(),
  },
  {
    userName: "Bill",
    age: 40,
    id: Math.random(),
  },
  {
    userName: "Jane",
    age: 56,
    id: Math.random(),
  },
];

function App() {
  const [users, setUsers] = useState("");

  // const addUserHandler = (user) => {
  //   setUsers((prevUsers) => {
  //     return [user, ...prevUsers];
  //   });
  // };

  const saveUserDataHandler = (enteredUser) => {
    const userData = {
      ...enteredUser,
      id: Math.random().toString,
    };

    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  return (
    <>
      <section id="user-form">
        <NewUserForm onAddUser={saveUserDataHandler} />
      </section>
      <section id="users">
        <Users items={users} />
      </section>
    </>
  );
}

export default App;

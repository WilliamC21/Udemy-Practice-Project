import React, { useState } from "react";

const NewUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      userName: enteredUserName,
      age: enteredAge,
    };

    setEnteredUserName("");
    setEnteredAge("");
    props.onAddUser(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          min="0"
          step="1"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
      </div>
      <div>
        <button type="submmit">Add User</button>
      </div>
    </form>
  );
};

export default NewUser;

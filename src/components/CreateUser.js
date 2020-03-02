import React from "react";

function CreateUser(props) {
  const { username, email, handleChange, handleCreate } = props;

  return (
    <React.Fragment>
      <input
        onChange={handleChange}
        name="username"
        value={username}
        placeholder="username"
        autoComplete="off"
      />
      <input
        onChange={handleChange}
        name="email"
        value={email}
        placeholder="email"
        autoComplete="off"
      />
      <button onClick={handleCreate}>create</button>
      <br />
    </React.Fragment>
  );
}

export default CreateUser;

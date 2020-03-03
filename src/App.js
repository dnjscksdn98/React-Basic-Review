import React, { useReducer, useCallback, useRef } from "react";

import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import CountActiveUsers from "./components/CountActiveUsers";

import reducer from "./store/reducers/users";
import { change, create, toggle, remove } from "./store/actions/users";

const initialState = {
  inputs: {
    username: "",
    email: ""
  },
  users: [
    {
      id: 1,
      username: "alex",
      email: "alex@gmail.com",
      active: false
    },
    {
      id: 2,
      username: "park",
      email: "park@gmail.com",
      active: false
    },
    {
      id: 3,
      username: "kim",
      email: "kim@gmail.com",
      active: false
    }
  ]
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  const nextId = useRef(4);

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
    dispatch(change(name, value));
  }, []);

  const handleCreate = useCallback(() => {
    dispatch(create(nextId, username, email));
    nextId.current += 1;
  }, [username, email]);

  const handleToggle = useCallback(id => {
    dispatch(toggle(id));
  }, []);

  const handleRemove = useCallback(id => {
    dispatch(remove(id));
  }, []);

  return (
    <React.Fragment>
      <CreateUser
        username={username}
        email={email}
        handleChange={handleChange}
        handleCreate={handleCreate}
      />
      <CountActiveUsers users={users} />
      <UserList
        users={users}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </React.Fragment>
  );
}

export default App;

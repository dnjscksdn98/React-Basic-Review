import React, { useState, useRef } from "react";

import Counter from "./components/Counter";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import CountActiveUsers from "./components/CountActiveUsers";

function App() {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   email: ""
  // });
  // const { username, email } = inputs;

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: "alex",
  //     email: "alex@gmail.com",
  //     active: false
  //   },
  //   {
  //     id: 2,
  //     username: "park",
  //     email: "park@gmail.com",
  //     active: false
  //   },
  //   {
  //     id: 3,
  //     username: "kim",
  //     email: "kim@gmail.com",
  //     active: false
  //   }
  // ]);

  // // useRef로 컴포넌트 안에 변수 만들기
  // // 컴포넌트가 리랜더링 되도 값이 변하지 않음
  // // nextId.current == 4
  // const nextId = useRef(4);

  // const handleCreate = () => {
  //   const newUser = {
  //     id: nextId.current,
  //     username,
  //     email
  //   };
  //   // 배열에서의 항목 추가(spread)
  //   setUsers([...users, newUser]);

  //   // // 배열에서의 항목 추가(concat)
  //   // setUsers(users.concat(newUser));

  //   setInputs({
  //     username: "",
  //     email: ""
  //   });
  //   nextId.current += 1;
  // };

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value
  //   });
  // };

  // const handleRemove = id => {
  //   setUsers(users.filter(user => user.id !== id));
  // };

  // const handleToggle = id => {
  //   setUsers(
  //     users.map(user =>
  //       user.id === id ? { ...user, active: !user.active } : user
  //     )
  //   );
  // };

  return (
    <React.Fragment>
      {/* <CreateUser
        username={username}
        email={email}
        handleChange={handleChange}
        handleCreate={handleCreate}
      />
      <CountActiveUsers users={users} />
      <UserList
        users={users}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
      /> */}
      <Counter />
    </React.Fragment>
  );
}

export default App;

import React, { useState } from "react";
import TodoList from "./TodoList";

function Todos(props) {
  const { todos, handleCreate, handleToggle } = props;
  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleCreate(text);
    setText("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} handleToggle={handleToggle} />
    </React.Fragment>
  );
}

export default React.memo(Todos);

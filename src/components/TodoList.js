import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos, handleToggle } = props;

  return (
    <React.Fragment>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default React.memo(TodoList);

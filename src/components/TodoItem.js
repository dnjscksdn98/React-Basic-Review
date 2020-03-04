import React from "react";

function TodoItem(props) {
  const { todo, handleToggle } = props;

  return (
    <React.Fragment>
      <li
        style={{
          cursor: "pointer",
          textDecoration: todo.done ? "line-through" : "none"
        }}
        onClick={() => handleToggle(todo.id)}
      >
        {todo.text}
      </li>
    </React.Fragment>
  );
}

export default React.memo(TodoItem);

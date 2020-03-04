import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleCreate = useCallback(
    text => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  const handleToggle = useCallback(
    id => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  return (
    <Todos
      todos={todos}
      handleCreate={handleCreate}
      handleToggle={handleToggle}
    />
  );
}

export default TodosContainer;

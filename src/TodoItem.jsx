import React, { useContext } from "react";
import TodoContext from "./context/TodoContext";

const TodoItem = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;

import React, { useState, useContext } from "react";
import TodoContext from "./context/TodoContext";

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo({
        id: Date.now(),
        text,
      });
      setText("");
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;

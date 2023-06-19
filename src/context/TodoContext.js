import React, { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  todos: [],
};

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;

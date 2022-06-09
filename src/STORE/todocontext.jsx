import React, { useState, useEffect } from "react";

const TodoContext = React.createContext({
  getInputedTodo: (todo) => {},
  addTodo: () => {},
  delTodo: (id) => {},
  setCompleted: (todo) => {},
  clearCompleted: () => {},
  setFilters: (filter) => {},
  todos: [],
  todo: {},
});

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    const filter = localStorage.getItem("filter");
    if (todos) {
      setTodos(JSON.parse(todos));
    }

    if(filter){
      setFilter(filter)
    }
  }, []);
  const addTodoHandler = (inputedTodo) => {
    setTodos((prev) => {
      localStorage.setItem("todos", JSON.stringify([inputedTodo, ...prev]));
      return [inputedTodo, ...prev];
    });
  };



  const toggleComplete = (id) => {
    setTodos((prev) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(
          prev.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        )
      );
      return prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const delTodoHandler = (id) => {
    localStorage.setItem(
      "todos",
      JSON.stringify(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      )
    );
    setTodos((todos) =>
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const clearCompletedHandler = () => {
    setTodos((prev) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(
          prev.filter((todo) => {
            return !todo.completed;
          })
        )
      );
      return prev.filter((todo) => {
        return !todo.completed;
      });
    });
  };

  const setFiltersHandler = (filtered) => {
    localStorage.setItem("filter", filtered)
    setFilter(filtered);
  };

  const value = {
    addTodo: addTodoHandler,
    delTodo: delTodoHandler,
    clearCompleted: clearCompletedHandler,
    setFilters: setFiltersHandler,
    todos,
    toggleComplete,
    filter,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };

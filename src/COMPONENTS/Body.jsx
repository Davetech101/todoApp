import { useState, useContext } from "react";
import StyledBody from "../STYLEDCOMPONENTS/StyledBody";
import cross from "../images/icon-cross.svg";
import { TodoContext } from "../STORE/todocontext";
import check from "../images/icon-check.svg";

const Body = () => {
  const [inputedTodo, setInputedTodo] = useState({
    id: "",
    todo: "",
    completed: false,
  });

  const filtersArray = ["All", "Active", "Completed"];

  const {
    addTodo,
    delTodo,
    clearCompleted,
    setFilters,
    todos,
    toggleComplete,
    filter,
  } = useContext(TodoContext);
  const finalTodos = () => {
    if (filter === "All") return todos;
    if (filter === "Active")
      return todos.filter((todo) => todo.completed === false);
    if (filter === "Completed") return todos.filter((todo) => todo.completed);
    return todos;
  };

  const todoList = (
    <ul>
      <div className="todos">
        {finalTodos().map((tod, idx) => (
          <li
            key={idx}
            draggable="true"
            className={tod.completed ? "complete" : ""}
          >
            <div>
              <button
                className={tod.completed ? "btn circle styled" : "btn circle"}
                onClick={() => toggleComplete(tod.id)}
              >
                {tod.completed && <img src={check} alt="" />}
              </button>
              {tod.todo}
            </div>
            <button onClick={() => delTodo(tod.id)}>
              <img src={cross} alt="" />
            </button>
          </li>
        ))}
      </div>

      <div className="bottom">
        <span>
          {finalTodos().length}{" "}
          {finalTodos().length === 0
            ? "items"
            : finalTodos().length === 1
            ? "item left"
            : "items left"}
        </span>
        <div className="desktopfilters filters">
          {filtersArray.map((filterd) => (
            <button
              key={filterd}
              value={filterd}
              onClick={() => setFilters(filterd)}
              className={filter === filterd ? "active" : ""}
            >
              {filterd}
            </button>
          ))}
        </div>
        <button onClick={() => clearCompleted()}>Clear Completed</button>
      </div>
    </ul>
  );

  const getTodo = (e) => {
    setInputedTodo((todo) => ({
      completed: false,
      todo: e.target.value,
      id: Math.random(),
    }));
  };

  const createTodo = (e) => {
    e.preventDefault();

    if (inputedTodo.todo.trim().length <= 0) {
      return;
    } else {
      addTodo(inputedTodo);
    }
    setInputedTodo((todo) => ({ ...todo, todo: "" }));
    e.target.reset();
  };

  return (
    <StyledBody>
      <div className="container">
        <form onSubmit={createTodo}>
          <label htmlFor="todo" className="circle"></label>
          <input
            type="text"
            id="todo"
            onChange={getTodo}
            placeholder="Create a new todo..."
            value={inputedTodo.todo}
          />
        </form>

        {todoList}

        <div className="filters mobilefilters">
          {filtersArray.map((filterd) => (
            <button
              key={filterd}
              value={filterd}
              onClick={() => setFilters(filterd)}
              className={filter === filterd ? "active" : ""}
            >
              {filterd}
            </button>
          ))}
        </div>

        <p>Drag and drop to reorder list</p>
      </div>
    </StyledBody>
  );
};

export default Body;

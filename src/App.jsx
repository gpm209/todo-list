import "./App.css";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";

const todos = [
  { id: 1, title: "Go over lesson" },
  { id: 2, title: "Go to group session" },
  { id: 3, title: "Work on assignments" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

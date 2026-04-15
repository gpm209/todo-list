import "./App.css";
import TodoList from "./TodoList.jsx";
import TouchForm from "./TouchForm.jsx";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TouchForm />
      <TodoList />
    </div>
  );
}

export default App;

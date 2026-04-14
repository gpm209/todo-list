import "./App.css";

function App() {
  const todoList = [
    { id: 1, title: "Go over lesson" },
    { id: 2, title: "Go to group session" },
    { id: 3, title: "Work on assignments" },
  ];
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

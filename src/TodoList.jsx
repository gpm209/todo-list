function TodoList() {
  const todoList = [
    { id: 1, title: "Go over lesson" },
    { id: 2, title: "Go to group session" },
    { id: 3, title: "Work on assignments" },
  ];

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;

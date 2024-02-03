function TodoList({ todo }) {
  return (
    <ul>
      {todo.map(list => (
        <li key={list}>{list}</li>
      ))}
    </ul>
  );
}

export default TodoList;

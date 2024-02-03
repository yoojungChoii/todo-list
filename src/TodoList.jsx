function TodoList({ toDo }) {
  return (
    <ul>
      {toDo.map(list => (
        <li>{list}</li>
      ))}
    </ul>
  );
}

export default TodoList;

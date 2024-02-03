function TodoList({ todo, setTodo }) {
  const removeTodo = index => {
    // _는 해당 변수 사용하지 않는다는 뜻
    // 현재 요소의 인덱스가 index와 같지 않을 때 삭제
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {todo.map((list, index) => (
        <li key={list}>
          {list}
          <button type="button" onClick={() => removeTodo(index)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

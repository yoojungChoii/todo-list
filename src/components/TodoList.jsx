// 배열 다루는 메서드! find, findIndex, slice, splice
// 문제가 생겼을 떄는 어디서부터 생겼는지 어떤게 문제인지
// 모르겠으면 console.log로 알아보기

function TodoList({ todos, setTodos }) {
  const handleDeleteTodo = id => {
    const updatedTodos = () => {
      todos.filter(todos.id !== id);
    };
    setTodos(updatedTodos);
  };

  return todos.map(title => (
    <ul>
      <li key={todos.id}>
        {title}
        <button type="submit" onClick={handleDeleteTodo(todos.id)}>
          삭제
        </button>
      </li>
    </ul>
  ));
}

export default TodoList;

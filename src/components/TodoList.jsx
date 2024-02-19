// 배열 다루는 메서드! find, findIndex, slice, splice
// 문제가 생겼을 떄는 어디서부터 생겼는지 어떤게 문제인지
// 모르겠으면 console.log로 알아보기
import { useEffect, useState } from 'react';
import GetTodolist from './GetTodolist';
import DeleteTodolist from './DeleteTodolist';
import TodoInput from './TodoInput';

function TodoList() {
  const [todos, setTodos] = useState([]);
  // todo.id를 id 매개변수로 전달받음
  const handleDeleteTodo = id => {
    // 삭제 버튼이 눌린 todo.id와 일치하지 않는 id를 가진 것을 updatedTodo에 저장
    const updatedTodos = todos.filter(todos => todos.id !== id);
    setTodos(updatedTodos);
    DeleteTodolist(id);
  };

  useEffect(() => {
    async function fetchTodo() {
      const getTodo = await GetTodolist();
      setTodos(getTodo);
    }
    fetchTodo();
  }, []);

  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button type="submit" onClick={() => handleDeleteTodo(todo.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;

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
  const handleDeleteTodo = async id => {
    // 삭제 버튼이 눌린 todo.id와 일치하지 않는 id를 가진 것을 updatedTodo에 저장
    const updatedTodos = todos.filter(todos => todos.id !== id);
    setTodos(updatedTodos);
    // 비동기 함수를 사용할 때 await 붙이는 거 잊지말기!!!!
    await DeleteTodolist(id);
  };

  useEffect(() => {
    async function fetchTodo() {
      const getTodo = await GetTodolist();
      setTodos(getTodo);
    }
    fetchTodo();
  }, []);

  // 수정 버튼 클릭 -> 인풋창, 확인 버튼, 취소 버튼 -> 확인 누르면 서버로 전송하고, 수정된 투두 리스트 반영
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

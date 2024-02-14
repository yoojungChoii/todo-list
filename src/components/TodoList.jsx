import { useState } from 'react';
import PutTodolist from './PutTodolist';
import DeleteTodolist from './DeleteTodolist';

function TodoList({ todo, setTodo }) {
  // 현재 수정중인 요소에 id를 저장할 값
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleremoveTodo = (index, t) => {
    // _는 해당 변수 사용하지 않는다는 뜻
    // 현재 요소의 인덱스가 index와 같지 않을 때 삭제
    setTodo(todo.filter((_, i) => i !== index));
    DeleteTodolist(t.id);
  };

  // 수정한 값을 editValue에 반영
  const handleEdit = e => {
    setEditValue(e.target.value);
  };

  // id값을 타겟id값으로 지정하고
  // PutTodolist를 호출해서 editValue값을 넘겨줌.......
  const handleEditInput = t => {
    setEditingId(t.id);
    setTodo(editValue);
    PutTodolist(t.id, todo);
  };

  return (
    // 리엑트에서 key가 필요한 이유
    <ul>
      {todo.map((t, index) => {
        if (t.id === editingId) {
          return (
            <li key={t.id}>
              <input value={editValue} onChange={handleEdit} />
            </li>
          );
        }
        return (
          <li key={t.id}>
            {t.title}
            <button type="button" onClick={() => handleEditInput(t)}>
              수정
            </button>
            <button type="button" onClick={() => handleremoveTodo(index, t)}>
              삭제
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;

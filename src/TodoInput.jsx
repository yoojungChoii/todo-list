import { useState } from 'react';
import TodoList from './TodoList';

function TodoInput() {
  const [toDo, setToDo] = useState();
  const handleTodoInput = e => {
    setToDo(e.target.value);
  };
  const handleSubmit = e => {
    setToDo(toDo);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDo}
          placeholder="입력하세용"
          onChange={handleTodoInput}
        />
        <button type="submit">입력</button>
      </form>
      <TodoList />
    </>
  );
}

// const inputStyle = style.div`
//   input {

//   }
// `

export default TodoInput;

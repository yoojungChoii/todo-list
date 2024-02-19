import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoComponent;

import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = updatedTodos => {
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoInput onAddTodo={addTodo} />
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </>
  );
}

export default TodoComponent;

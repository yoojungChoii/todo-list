async function GetTodolist() {
  const response = await fetch('/todos', { method: 'GET' });
  const result = await response.json();
  return result;
}

export default GetTodolist;

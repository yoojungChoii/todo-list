async function GetTodolist() {
  const response = await fetch('/todos');
  const result = await response.json();
  return result;
}

export default GetTodolist;

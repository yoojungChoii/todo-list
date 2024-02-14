export default async function DeleteTodolist(id) {
  const response = await fetch(`/todos/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();
  return result;
}

export default async function DeleteTodolist(id, editValue) {
  const response = await fetch(`/todos/${id}`, {
    method: 'DELETE',
    id: { id },
  });
  const result = await response.json();
  return result;
}

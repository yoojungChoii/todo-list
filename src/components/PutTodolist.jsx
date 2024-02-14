export default async function PutTodolist(id, title) {
  const response = await fetch(`/todos/${id}`, { method: 'PUT', body: title });
  const result = await response.json();
  return result;
}

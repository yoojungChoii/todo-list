export default async function PutTodolist(id, title) {
  // JSON, JSON string으로
  const response = await fetch(`/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title }),
  });
  const result = await response.json();
  return result;
}

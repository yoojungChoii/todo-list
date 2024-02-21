export default async function PostTodolist(id, title) {
  // JSON, JSON string으로
  const response = await fetch(`/todos/${id}`, {
    method: 'POST',
    body: JSON.stringify({ id, title }),
  });
  const result = await response.json();
  return result;
}

export default async function PostTodolist(title) {
  // JSON, JSON string으로
  const response = await fetch(`/todos`, {
    method: 'POST',
    body: JSON.stringify({ title }),
  });
  const result = await response.json();
  return result;
}

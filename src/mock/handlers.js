import { http, HttpResponse } from 'msw';

let data = [
  {
    id: 1,
    title: 'React 공부하기',
  },
  {
    id: 2,
    title: '타입스트립트 공부하기',
  },
  {
    id: 3,
    title: 'next.js 공부하기',
  },
  {
    id: 4,
    title: 'javascript 공부하기',
  },
  {
    id: 5,
    title: 'useEffect 공부하기',
  },
];

const getTodos = http.get('/todos', () =>
  HttpResponse.json(data, { status: 200 }),
);

const putTodos = http.get('/todos', () => HttpResponse.json());

const deleteTodo = http.delete('/todos/:id', ({ params }) => {
  data = data.filter(d => d.id !== Number(params.id));
  return HttpResponse.json({ id: Number(params.id) }, { status: 202 });
});
// const deleteTodo = http.delete('/todos/:id', () => {});

const handlers = [getTodos, putTodos, deleteTodo];

export default handlers;

// GET method, /todos
// fetch('/todos')
// [{id, title}]

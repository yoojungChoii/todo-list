import { http, HttpResponse } from 'msw';

const getTodos = http.get('/todos', () =>
  HttpResponse.json(
    [
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
    ],
    { status: 200 },
  ),
);

const handlers = [getTodos];

export default handlers;

// GET method, /todos
// fetch('/todos')
// [{id, title}]

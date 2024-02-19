// 버튼을 분리하고 싶었는데 분리한 컴포넌트에서 타입을 정확히 지정하지 않았더니 오류가 남

// javascript - callback 다시 공부하기! v
// setState v
// props 넘겨주고 받는거 v

// 삭제 버튼 -> 누르면 투두리스트가 삭제! 하나하나

// React로 데이터 다루기 강좌듣기
// await은 async 함수 안에서만 사용 가능
// onSubmit 기본 기능이 페이지 새로고침이니까 막아줘야함

import { useState } from 'react';

function TodoInput({ setTodos }) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const handleTodolist = e => {
    e.preventDefault();
    setTodos(prevTodos => [...prevTodos, inputValue]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleTodolist}>
      <input value={inputValue} onChange={handleInput} />
      <button type="submit">입력</button>
    </form>
  );
}

export default TodoInput;

// TODO LIST 요청을 보낸다
// DATA (TODO LIST)를 받아와서 렌더링!
// useEffect -> 언제 실행되는지, useEffect 디펜던시

// React로 데이터 다루기 - 데이터 가져오기 v

// todos/:id   , method: put , { title: '수정내용' } -> response 예시: { id: 1, title: '수정내용' } ->이거를 상태값에 반영
// todos/:id   , method: delete -> response -> {id: 1}  -> 이거를 제외한 값으로 상태 반영

// 수정하거나 삭제하면, 서버로 요청을 보내고! 결과를 렌더링에 반영

// 1. 불러오고, 삭제  금요일 4시까지!!!

// 2. 수정하기

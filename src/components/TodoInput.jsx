import { useState } from 'react';
import TodoList from './TodoList';

// 버튼을 분리하고 싶었는데 분리한 컴포넌트에서 타입을 정확히 지정하지 않았더니 오류가 남

// javascript - callback 다시 공부하기! v
// setState v
// props 넘겨주고 받는거 v

// 삭제 버튼 -> 누르면 투두리스트가 삭제! 하나하나

// React로 데이터 다루기 강좌듣기
function TodoInput() {
  // useState 기본값이 없으면 undefined가 들어감
  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState([]);

  const handleInput = e => {
    setInputValue(e.target.value);
  };
  const handleSubmit = e => {
    // onSubmit 기본 기능이 페이지 새로고침이니까 막아줘야함
    e.preventDefault();
    // 입력된 값이 여러개 들어가야하니 배열로
    setTodo([...todo, inputValue]);
    // 입력하고나면 input 창이 비어야함
    setInputValue('');
  };

  return (
    // TodoList에서 todo를 넘겨받아 사용하고 싶다면 prop으로 넘겨줘야함
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          placeholder="입력해주세용"
          onChange={handleInput}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

// const inputStyle = style.div`
//   input {

//   }
// `

export default TodoInput;

// TODO LIST 요청을 보낸다
// DATA (TODO LIST)를 받아와서 렌더링!
// useEffect -> 언제 실행되는지, useEffect 디펜던시

// React로 데이터 다루기 - 데이터 가져오기
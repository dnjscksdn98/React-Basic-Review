import React, { useState, useRef } from "react";

function Input() {
  // 객체 상태 관리
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  // 특정 DOM 선택하기
  const nameInput = useRef();
  const { name, nickname } = inputs;

  // event.target.name
  // event.target.value
  const handleChange = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    nameInput.current.focus();
  };

  return (
    <React.Fragment>
      {/* 중요 : value 값 꼭 설정하기 */}
      {/* 중요 : 여러개의 input 상태 관리 시에는 name 값을 설정하기 */}
      <input
        onChange={handleChange}
        placeholder="name"
        name="name"
        value={name}
        ref={nameInput}
      />
      <input
        onChange={handleChange}
        placeholder="nickname"
        name="nickname"
        value={nickname}
      />
      <button onClick={handleReset}>초기화</button>
      <React.Fragment>
        <b>
          값 : {name}({nickname})
        </b>
      </React.Fragment>
    </React.Fragment>
  );
}

export default Input;

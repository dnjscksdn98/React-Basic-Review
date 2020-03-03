import React from "react";

// Presentational Component : UI 담당, 필요한 값이나 함수는 props로 전달받는다.

function Counter(props) {
  const { number, diff, handleIncrease, handleDecrease, handleSetDiff } = props;

  const handleChange = event => {
    // input은 기본적으로 문자열이므로 숫자로 변환
    handleSetDiff(parseInt(event.target.value, 10));
  };

  return (
    <React.Fragment>
      <h1>{number}</h1>

      <div>
        <input type="number" value={diff} onChange={handleChange} />
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </React.Fragment>
  );
}

export default Counter;

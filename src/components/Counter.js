import React, { useReducer, useState } from "react";

import reducer from "../store/reducers/counter";
import { increase, decrease } from "../store/actions/counter";

function Counter() {
  // const [number, setNumber] = useState(0);

  // useReducer(사용할 리듀서, 초기값)
  const [number, dispatch] = useReducer(reducer, 0);

  const handleIncrease = () => {
    // setNumber(prevNumber => prevNumber + 1);
    dispatch(increase());
  };

  const handleDecrease = () => {
    // setNumber(prevNumber => prevNumber - 1);
    dispatch(decrease());
  };

  return (
    <React.Fragment>
      <h1>{number}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </React.Fragment>
  );
}

export default Counter;

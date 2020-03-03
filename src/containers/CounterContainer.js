import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

// Container Component

function CounterContainer() {
  // store 안에서의 리듀서의 상태 조회
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  // dispatch 함수를 사용할 수 있게 함
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const handleSetDiff = diff => {
    dispatch(setDiff(diff));
  };

  return (
    <Counter
      number={number}
      diff={diff}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      handleSetDiff={handleSetDiff}
    />
  );
}

export default CounterContainer;

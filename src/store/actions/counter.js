import { INCREMENT, DECREMENT } from "./actionTypes";

export function increase() {
  return {
    type: INCREMENT
  };
}

export function decrease() {
  return {
    type: DECREMENT
  };
}

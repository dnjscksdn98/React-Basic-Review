import { INCREMENT, DECREMENT } from "../actions/actionTypes";

function increase(state, action) {
  return state + 1;
}

function decrease(state, action) {
  return state - 1;
}

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return increase(state, action);

    case DECREMENT:
      return decrease(state, action);

    default:
      return state;
  }
}

export default reducer;

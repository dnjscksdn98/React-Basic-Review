import {
  CHANGE_INPUT,
  CREATE_USER,
  TOGGLE_USER,
  REMOVE_USER
} from "../actions/actionTypes";

function change(state, action) {
  return {
    ...state,
    inputs: {
      ...state.inputs,
      [action.name]: action.value
    }
  };
}

function create(state, action) {
  return {
    inputs: {
      username: "",
      email: ""
    },
    users: state.users.concat(action.user)
  };
}

function toggle(state, action) {
  return {
    ...state,
    users: state.users.map(user =>
      user.id === action.id ? { ...user, active: !user.active } : user
    )
  };
}

function remove(state, action) {
  return {
    ...state,
    users: state.users.filter(user => user.id !== action.id)
  };
}

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return change(state, action);

    case CREATE_USER:
      return create(state, action);

    case TOGGLE_USER:
      return toggle(state, action);

    case REMOVE_USER:
      return remove(state, action);

    default:
      return state;
  }
}

export default reducer;

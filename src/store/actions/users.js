import {
  CHANGE_INPUT,
  CREATE_USER,
  TOGGLE_USER,
  REMOVE_USER
} from "./actionTypes";

export function change(name, value) {
  return {
    type: CHANGE_INPUT,
    name,
    value
  };
}

export function create(nextId, username, email) {
  return {
    type: CREATE_USER,
    user: {
      id: nextId.current,
      username,
      email
    }
  };
}

export function toggle(id) {
  return {
    type: TOGGLE_USER,
    id
  };
}

export function remove(id) {
  return {
    type: REMOVE_USER,
    id
  };
}

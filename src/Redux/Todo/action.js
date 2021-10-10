import {
  ADD_TODO_LOADING,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
} from "./actionType.js";

const addTodoLoading = () => {
  return { type: ADD_TODO_LOADING };
};

const addTodoSuccess = (data) => {
  return { type: ADD_TODO_SUCCESS, payload: data };
};
const addTodoError = (err) => {
  return { type: ADD_TODO_ERROR, payload: err };
};

const getTodoLoading = () => {
  return { type: GET_TODO_LOADING };
};

const getTodoSuccess = (data) => {
  return { type: GET_TODO_SUCCESS, payload: data };
};

const getTodoError = (err) => {
  return { type: GET_TODO_ERROR, payload: err };
};


export {
  addTodoLoading,
  addTodoSuccess,
  addTodoError,
  getTodoLoading,
  getTodoSuccess,
  getTodoError,
};

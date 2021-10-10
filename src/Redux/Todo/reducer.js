import {
  ADD_TODO_LOADING,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
  GET_TODO_LOADING,
} from "./actionType.js";

const initialState = {
  todo: {
    isLoading: false,
    isError: false,
    todoData: [],
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: true,
        },
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: false,
        },
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        todo: {
          isError: true,
        },
      };

    case GET_TODO_LOADING:
      return {
        ...state,
        todo: {
          isLoading: true,
        },
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todo: {
          isLoading: false,
          todoData: [...payload],
        },
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        todo: {
          isError: true,
        },
      };
    default:
      return state;
  }
};

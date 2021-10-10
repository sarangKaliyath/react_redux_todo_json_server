import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoError,
  addTodoSuccess,
    getTodoSuccess,
    getTodoError,
  getTodoLoading
} from "../Redux/Todo/action.js";

export const Todo = () => {
  const [text, setText] = useState("");

  const { isError, isLoading} = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = async () => {
    // dispatch(addTodoLoading());
    try {
      let res = await axios.post("http://localhost:3001/todo", {
        title: text,
        status: false,
      });
      dispatch(addTodoSuccess(res));
      getTodo();
    } catch (err) {
      dispatch(addTodoError(err));
    }
  };

  const getTodo = async () => {
    dispatch(getTodoLoading());

    try {
      let res = await axios.get("http://localhost:3001/todo");
      dispatch(getTodoSuccess(res.data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  };

  useEffect(() => {
    getTodo();
  }, []);
  return isLoading ? (
    <h1>...Loading</h1>
  ) : isError ? (
    <h1>...Error</h1>
  ) : (
    <div>
      <h1>Todo's</h1>
      <input onChange={handleChange} type="text" placeholder="Enter Todos" />
      <button onClick={handleClick}>Add Todo</button>{" "}
    </div>
  );
};

import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const EditTodo = () => {
  const { id } = useParams();
  const [todoData, setTodoData] = useState([]);
  const [text, setText] = useState("");
  const history = useHistory();
  const [showUpdateBox, setShowUpdateBox] = useState(false);
  const getTodo = async () => {
    await axios
      .get(`http://localhost:3001/todo/${id}`)
      .then((res) => setTodoData(res.data));
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleToggle = async () => {
    await axios.patch(`http://localhost:3001/todo/${id}`, {
      status: !todoData.status,
    });
    getTodo();
  };

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:3001/todo/${id}`)
      .then(() => history.push("/"));
  };

  const handleUpdate = async () => {
    setShowUpdateBox(!showUpdateBox);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleTitle = async () => {
    await axios.put(`http://localhost:3001/todo/${id}`, {
      title: text,
    });
    setShowUpdateBox(!showUpdateBox);
    getTodo();
  };
  return (
    <div>
      <h1> Todo Edit Page</h1>
      <span>{todoData.title}</span>{" "}
      <span>{todoData.status ? "Done" : "Not Done"}</span>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleToggle}>Toggle</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
      {showUpdateBox ? (
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Change Todo"
          />
          <button onClick={handleTitle}>Enter</button>
        </div>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

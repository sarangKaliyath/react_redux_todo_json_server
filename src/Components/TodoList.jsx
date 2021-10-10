import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodoLoading, getTodoError, getTodoSuccess } from '../Redux/Todo/action.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
export const TodoList = () => {

    const dispatch = useDispatch();

    const {isLoading,todoData,isError } = useSelector((state) => state.todo);

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


    return (<div>
        {isLoading ? <div>loading</div> : isError ? <div>error</div> : <div>
            {todoData.map(el => {
                return (
                  <div key={el.id}>
                    <Link to={`/item/${el.id}`}>
                      <div >
                        <span>{el.title}</span>
                        {" "}
                        <span>{el.status ? "Done" : "NotDone"}</span>
                      </div> 
                    </Link>
                  </div>
                );
        })}
        </div>}
        </div>
    )
}

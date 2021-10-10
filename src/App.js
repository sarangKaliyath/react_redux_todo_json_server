import './App.css';
import { Todo } from './Components/Todo';
import { TodoList } from './Components/TodoList';
import { Route } from 'react-router-dom';
import {EditTodo } from './Components/EditTodo';

function App() {
  return (
    <div className="App">
      <Route exact path= "/">
        <Todo />
        <TodoList />
      </Route>
      <Route path='/item/:id'>
        <EditTodo/>
      </Route>
    </div>
  );
}

export default App;

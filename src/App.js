import React, { useState } from 'react';
import './App.css';

const Todolist = () => {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };
  
 const deleteTodo = (index) => { 
    setTodos(todos.filter((todo, i) => i !== index))
  };

  return (
    <div>
      <header className="App-header">
        <h1>Simple Todolist</h1>
      </header>
      <div class="todos">
        <span>Add todo:</span>
          <form class="style" onSubmit={addTodo}>
            <label>Description:</label>
            <input type="text" onChange={inputChanged} name="description" value={todo.description}/>
            <label>Date:</label>
            <input type="text" onChange={inputChanged} name="date" value={todo.date}/>
            <input type="submit" value="Add"/>
          </form>
      </div>  
          <table>
            <tbody>
              <tr><th>Date</th><th>Description</th></tr>
              {todos.map((todo, index) => 
                <tr key={index}>
                  <td>{todo.date}</td>
                  <td>{todo.description}</td>
                  <td><button type="button" id={index} onClick={() => deleteTodo(index)}>Delete</button></td>
                  </tr>
                  )}           
            </tbody>
          </table>                
    </div>
  );
};

export default Todolist;
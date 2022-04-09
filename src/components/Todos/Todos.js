import React from 'react';
import './Todos.css';

function Todos(todo){
  return(
    <div className="todo">
      UserId : {todo.userId} <br/>
      Id : {todo.id} <br/>
      Title : {todo.title} <br/>
      </div>
  )
}
export default Todos;
import React from "react";

const Todo = ({todo, toggle}) => {

  const handleClick = (e) => {
    e.preventDefault();
    toggle(e.currentTarget.id)
  }
  return (
    <div className={ todo.done ? "complete" : ""} onClick = {handleClick} id = {todo.id}>
      {todo.todo}
    </div>
  )
};

export default Todo;
import React from "react";
import "../Components/CSS/TodoItem.css";
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const TodoItem = ({todo, remove, index}) => {
  return (
    <div className="item-container">
      <div className="todo-item">
        <p className="todo">{todo}</p>
        <input type="checkbox" className="todo-checkbox" />
        <button className="remove-todo-btn">
          <FontAwesomeIcon onClick={() => remove(index)} className="icon" icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

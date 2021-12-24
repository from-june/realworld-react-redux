import React from 'react';

const TodoItem = ({ id, task, completed }: ITodo) => {
  return (
    <li className={completed ? 'completed' : ''} data-task-id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{task}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="투두 리스트" />
    </li>
  );
};

export default TodoItem;

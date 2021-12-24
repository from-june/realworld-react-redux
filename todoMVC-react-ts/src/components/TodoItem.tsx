import React from 'react';

type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

const TodoItem = ({ id, task, completed }: Todo) => {
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

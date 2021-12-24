import React from 'react';

type Todo = {
  task: string;
  completed: boolean;
};

const TodoItem = ({ task, completed }: Todo) => (
  <li className={completed ? 'completed' : ''}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} />
      <label>{task}</label>
      <button className="destroy"></button>
    </div>
    <input className="edit" value="투두 리스트" />
  </li>
);

export default TodoItem;

import React from 'react';

type propsTodoItem = {
  id: string;
  task: string;
  completed: boolean;
  deleteTask: (targetId: string) => void;
};

const TodoItem = ({ id, task, completed, deleteTask }: propsTodoItem) => {
  return (
    <li className={completed ? 'completed' : ''} data-task-id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{task}</label>
        <button className="destroy" onClick={() => deleteTask(id)}></button>
      </div>
      <input className="edit" value="투두 리스트" />
    </li>
  );
};

export default TodoItem;

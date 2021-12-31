import React, { useState, useRef, useLayoutEffect } from 'react';

type propsTodoItem = {
  id: string;
  task: string;
  completed: boolean;
  deleteTask: (targetId: string) => void;
  toggleTask: (targetId: string) => void;
  modifyTask: (targetId: string, task: string) => void;
};

const TodoItem = ({
  id,
  task,
  completed,
  deleteTask,
  toggleTask,
  modifyTask
}: propsTodoItem) => {
  const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (inputRef !== null) inputRef.current?.focus();
  });

  const onListDoubleClick = () => {
    setEdit(true);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  const editTaskItem = () => {
    modifyTask(id, editedTask);
    setEdit(false);
  };

  const onEnterKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    editTaskItem();
  };

  return (
    <li
      className={(completed ? 'completed' : '') + (edit ? 'editing' : '')}
      data-task-id={id}
      onDoubleClick={onListDoubleClick}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onClick={() => toggleTask(id)}
          readOnly
        />
        <label>{task}</label>
        <button className="destroy" onClick={() => deleteTask(id)}></button>
      </div>
      <input
        className="edit"
        value={editedTask}
        onChange={onInputChange}
        onKeyUp={onEnterKeyUp}
        ref={inputRef}
        onBlur={editTaskItem}
      />
    </li>
  );
};

export default TodoItem;

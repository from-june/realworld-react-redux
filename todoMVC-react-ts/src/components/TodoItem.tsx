import React, { useState, useRef, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { modifyTask, deleteTask, toggleTask } from 'modules/actions';

const TodoItem = ({ id, task, completed }: ITodo) => {
  const dispatch = useDispatch();

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
    dispatch(modifyTask(id, editedTask));
    setEdit(false);
  };

  const onEnterKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    editTaskItem();
  };

  const onDeleteClick = () => {
    if (confirm('삭제된 아이템은 복구되지 않습니다. 정말 삭제하시겠습니까?')) {
      dispatch(deleteTask(id));
    }
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
          onClick={() => dispatch(toggleTask(id))}
          readOnly
        />
        <label>{task}</label>
        <button className="destroy" onClick={onDeleteClick}></button>
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

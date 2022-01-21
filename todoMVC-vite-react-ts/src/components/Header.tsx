import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from 'modules/todoListSlice';

const Header = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const onInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={task}
        onChange={onInputChange}
        onKeyUp={onInputKeyUp}
      />
    </header>
  );
};

export default Header;

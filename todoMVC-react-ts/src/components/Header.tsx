import React, { useState } from 'react';

const Header = () => {
  const [task, setTask] = useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const onInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') setTask('');
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

import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

interface IAddTask {
  addTask: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Header = ({ addTask }: IAddTask) => {
  const [task, setTask] = useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const onInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask(prevState => [
        { task, completed: false, id: uuid() },
        ...prevState
      ]);
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

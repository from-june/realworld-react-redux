import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoItem from 'components/TodoItem';

const Main = () => {
  const initialState = [
    { id: uuid(), task: 'To do an assignment', completed: false },
    { id: uuid(), task: 'Be a FE developer', completed: true },
    { id: uuid(), task: 'Do what I do like', completed: true }
  ];

  const [todoList, setTodoList] = useState(initialState);

  return (
    <main className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={false}
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
          />
        ))}
      </ul>
    </main>
  );
};

export default Main;

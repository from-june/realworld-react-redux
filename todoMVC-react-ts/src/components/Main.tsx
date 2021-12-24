import React from 'react';
import TodoItem from 'components/TodoItem';

const Main = () => (
  <main className="main">
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      checked={false}
    />
    <label htmlFor="toggle-all"></label>
    <ul className="todo-list">
      <TodoItem task={'To do an assignment'} completed={false} />
    </ul>
  </main>
);

export default Main;

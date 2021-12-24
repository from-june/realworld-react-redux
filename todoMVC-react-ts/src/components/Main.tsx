import React from 'react';

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
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" checked={false} />
          <label>투두 리스트</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="투두 리스트" />
      </li>
    </ul>
  </main>
);

export default Main;

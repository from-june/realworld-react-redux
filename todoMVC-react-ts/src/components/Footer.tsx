import React from 'react';

type propsFooter = {
  todoList: ITodo[];
  clearCompleted: () => void;
};

const Footer = ({ todoList, clearCompleted }: propsFooter) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoList.length}</strong>
        <span> items</span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <span> </span>
        <li>
          <a href="#/active" className="">
            Active
          </a>
        </li>
        <span> </span>
        <li>
          <a href="#/completed" className="">
            Completed
          </a>
        </li>
      </ul>
      {todoList.some(todo => todo.completed === true) && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;

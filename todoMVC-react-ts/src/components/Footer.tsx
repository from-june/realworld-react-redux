import React from 'react';

type propsFooter = {
  todoList: ITodo[];
  clearCompleted: () => void;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Footer = ({
  todoList,
  clearCompleted,
  filter,
  setFilter
}: propsFooter) => {
  const category = ['all', 'active', 'completed'];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoList.length}</strong>
        <span> items</span>
        <span> left</span>
      </span>
      <ul className="filters">
        {category.map(taskState => (
          <li key={taskState}>
            <a
              href={`#/${taskState}`}
              className={taskState === filter ? 'selected' : ''}
              onClick={() => setFilter(taskState)}
            >
              {`${taskState[0].toUpperCase()}${taskState.slice(1)}`}
            </a>
          </li>
        ))}
      </ul>
      {todoList.some(todo => todo.completed === true) &&
        (filter === 'all' || filter === 'completed') && (
          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
    </footer>
  );
};

export default Footer;

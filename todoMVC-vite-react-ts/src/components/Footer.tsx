import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCompleted } from 'modules/todoListSlice';

type propsFooter = {
  todoList: ITodo[];
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

export const category = ['all', 'active', 'completed'] as Filter[];

const Footer = ({ todoList, filter, setFilter }: propsFooter) => {
  const dispatch = useDispatch();
  const leftItemListCount = todoList.filter(
    task => task.completed === false
  ).length;

  return (
    <footer className="footer">
      <span className="todo-count" aria-label="left todos count">
        <strong>{leftItemListCount === 0 ? 'no' : leftItemListCount}</strong>
        <span> {leftItemListCount >= 2 ? 'items' : 'item'}</span>
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
          <button
            className="clear-completed"
            onClick={() => dispatch(clearCompleted())}
          >
            Clear completed
          </button>
        )}
    </footer>
  );
};

export default Footer;

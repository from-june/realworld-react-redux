import React from 'react';
import useTodoListAtom from 'modules/useTodoListAtom';

type propsFooter = {
  todoList: ITodo[];
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

const Footer = ({ todoList, filter, setFilter }: propsFooter) => {
  const { clearCompleted } = useTodoListAtom();
  const category = ['all', 'active', 'completed'] as Filter[];

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
          <button className="clear-completed" onClick={() => clearCompleted()}>
            Clear completed
          </button>
        )}
    </footer>
  );
};

export default Footer;

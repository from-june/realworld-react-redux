import React from 'react';
import TodoItem from 'components/TodoItem';

type typeTodoList = {
  todoList: { id: string; task: string; completed: boolean }[];
};

const Main = ({ todoList }: typeTodoList) => {
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

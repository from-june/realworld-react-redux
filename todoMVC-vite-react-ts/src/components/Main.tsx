import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleAllTasks } from 'modules/todoListSlice';
import TodoItem from 'components/TodoItem';

type propsTodoList = {
  todoList: ITodo[];
};

const Main = ({ todoList }: propsTodoList) => {
  const dispatch = useDispatch();

  return (
    <main className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={false}
        readOnly
      />
      <label
        htmlFor="toggle-all"
        onClick={() => dispatch(toggleAllTasks())}
      ></label>
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

import React from 'react';
import useTodoListAtom from 'modules/useTodoListAtom';
import TodoItem from 'components/TodoItem';

type propsTodoList = {
  todoList: ITodo[];
};

const Main = ({ todoList }: propsTodoList) => {
  const { toggleAllTasks } = useTodoListAtom();

  return (
    <main className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={false}
        readOnly
      />
      <label htmlFor="toggle-all" onClick={() => toggleAllTasks()}></label>
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

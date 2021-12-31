import React from 'react';
import TodoItem from 'components/TodoItem';

type propsTodoList = {
  todoList: ITodo[];
  deleteTask: (targetId: string) => void;
  toggleTask: (targetId: string) => void;
  modifyTask: (targetId: string, task: string) => void;
};

const Main = ({
  todoList,
  deleteTask,
  toggleTask,
  modifyTask
}: propsTodoList) => {
  return (
    <main className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={false}
        readOnly
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            modifyTask={modifyTask}
          />
        ))}
      </ul>
    </main>
  );
};

export default Main;

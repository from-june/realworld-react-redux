import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const App = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTask = (task: string) => {
    setTodoList(prevState => [
      { task, completed: false, id: uuid() },
      ...prevState
    ]);
  };

  const deleteTask = (taskId: string) => {
    setTodoList(prevState => prevState.filter(todo => todo.id !== taskId));
  };

  const toggleTask = (taskId: string) => {
    setTodoList(prevState =>
      prevState.map(todo =>
        todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () =>
    setTodoList(prevState =>
      prevState.filter(todo => todo.completed === false)
    );

  return (
    <section className="todoapp">
      <>
        <Header addTask={addTask} />
        <Main
          todoList={todoList}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
        <Footer clearCompleted={clearCompleted} todoList={todoList} />
      </>
    </section>
  );
};

export default App;

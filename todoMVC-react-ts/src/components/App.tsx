import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const App = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const data = localStorage.getItem('TODO_LIST');

    if (data) {
      setTodoList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('TODO_LIST', JSON.stringify(todoList));
  }, [todoList]);

  const addTask = (task: string) => {
    if (task === '') return;

    const newTask = { task, completed: false, id: uuid() };
    setTodoList(prevState => [newTask, ...prevState]);
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

  const modifyTask = (taskId: string, newTask: string) => {
    setTodoList(prevState =>
      prevState.map(todo =>
        todo.id === taskId ? { ...todo, task: newTask } : todo
      )
    );
  };

  const toggleAllTasks = () => {
    const isCompletedAll = todoList.every(todo => todo.completed);
    setTodoList(prevState =>
      prevState.map(todo => ({ ...todo, completed: !isCompletedAll }))
    );
  };

  const clearCompleted = () => {
    setTodoList(prevState =>
      prevState.filter(todo => todo.completed === false)
    );
  };

  const filterTask = (category: string) => {
    if (category === 'active') {
      return todoList.filter(todo => todo.completed === false);
    }

    if (category === 'completed') {
      return todoList.filter(todo => todo.completed === true);
    }

    return todoList;
  };

  const filterTodoList = filterTask(filter);

  return (
    <section className="todoapp">
      <>
        <Header addTask={addTask} />
        <Main
          todoList={filterTodoList}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          modifyTask={modifyTask}
          toggleAllTasks={toggleAllTasks}
        />
        <Footer
          clearCompleted={clearCompleted}
          todoList={todoList}
          filter={filter}
          setFilter={setFilter}
        />
      </>
    </section>
  );
};

export default App;

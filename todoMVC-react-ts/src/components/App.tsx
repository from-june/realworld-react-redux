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

  return (
    <section className="todoapp">
      <>
        <Header addTask={addTask} />
        <Main todoList={todoList} />
        <Footer />
      </>
    </section>
  );
};

export default App;

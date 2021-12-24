import React, { useState } from 'react';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const App = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  return (
    <section className="todoapp">
      <>
        <Header addTask={setTodoList} />
        <Main todoList={todoList} />
        <Footer />
      </>
    </section>
  );
};

export default App;

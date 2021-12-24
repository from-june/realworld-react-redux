import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

const App = () => {
  const initialState = [
    { id: uuid(), task: 'To do an assignment', completed: false },
    { id: uuid(), task: 'Be a FE developer', completed: true },
    { id: uuid(), task: 'Do what I do like', completed: true }
  ];

  const [todoList, setTodoList] = useState(initialState);

  return (
    <section className="todoapp">
      <>
        <Header />
        <Main todoList={todoList} />
        <Footer />
      </>
    </section>
  );
};

export default App;

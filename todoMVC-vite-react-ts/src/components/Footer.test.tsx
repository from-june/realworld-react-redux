import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import Footer from 'components/Footer';
import todoListReducer from 'modules/todoListSlice';

const renderWithStore = (ui: React.ReactElement, preloadedState: ITodo[]) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={createStore(todoListReducer, preloadedState)}>
        {children}
      </Provider>
    )
  });
};

const COMPLETED_TODO = {
  id: '92de869c-a0ee-4e51-b6ee-94230863da0b',
  task: 'Be happy',
  completed: true
};

const LEFT_TODO = {
  id: '4b353015-3ebc-427e-bd7c-b5d2d80f23a5',
  task: 'Study hard',
  completed: false
};

const renderFooter = ({
  filter,
  leftItemsCount
}: {
  filter: string;
  leftItemsCount: number;
}) => {
  const todoList: ITodo[] = Array(leftItemsCount).fill(LEFT_TODO);

  todoList.push(COMPLETED_TODO);

  renderWithStore(
    <Footer todoList={todoList} filter="all" setFilter={() => {}} />,
    todoList
  );
};

describe('Footer', () => {
  it('Footer를 잘 렌더할 수 있다', () => {
    const todoList: ITodo[] = [COMPLETED_TODO, LEFT_TODO];

    renderWithStore(
      <Footer todoList={todoList} filter="all" setFilter={() => {}} />,
      todoList
    );
  });

  describe('남은 할일 개수', () => {
    it('0개일 때 no item으로 보여진다', () => {
      renderFooter({ filter: 'all', leftItemsCount: 0 });

      const countLabel = screen.getByLabelText('left todos count');
      expect(countLabel.textContent).toBe('no item left');
    });

    it('1개일 때 단수 item으로 보여진다', () => {
      renderFooter({ filter: 'all', leftItemsCount: 1 });

      const countLabel = screen.getByLabelText('left todos count');
      expect(countLabel.textContent).toBe('1 item left');
    });

    it('2개 이상일 때 복수 items로 보여진다', () => {
      renderFooter({ filter: 'all', leftItemsCount: 2 });

      const countLabel = screen.getByLabelText('left todos count');
      expect(countLabel.textContent).toBe('2 items left');
    });
  });
});

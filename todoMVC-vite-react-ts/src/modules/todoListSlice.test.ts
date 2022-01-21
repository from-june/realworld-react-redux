import reducer, {
  addTask,
  deleteTask,
  toggleTask
} from 'modules/todoListSlice';

const TEST_TODO = {
  id: '92de869c-a0ee-4e51-b6ee-94230863da0b',
  task: 'Be happy',
  completed: true
};

const TEST_TODO_2 = {
  id: '4b353015-3ebc-427e-bd7c-b5d2d80f23a5',
  task: 'Study hard',
  completed: false
};

describe('todoListSilce Reducers', () => {
  it('addTask는 task를 추가한다', () => {
    const previousState: ITodo[] = [];
    const nextState = reducer(previousState, addTask('Be happy'));

    expect(nextState.length).toEqual(1);
    expect(nextState[0].task).toEqual('Be happy');
  });

  it('deleteTask는 task를 삭제한다', () => {
    const previousState: ITodo[] = [TEST_TODO, TEST_TODO_2];
    const nextState = reducer(previousState, deleteTask(TEST_TODO.id));

    expect(nextState).toEqual([TEST_TODO_2]);
  });

  it('toggleTask는 task를 완료한다', () => {
    const previousState: ITodo[] = [TEST_TODO, TEST_TODO_2];
    const nextState = reducer(previousState, toggleTask(TEST_TODO_2.id));

    expect(nextState).toEqual([TEST_TODO, { ...TEST_TODO_2, completed: true }]);
  });
});

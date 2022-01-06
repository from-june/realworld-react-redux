import { atom, useAtom } from 'jotai';
import { v4 as uuid } from 'uuid';

const initialState = [
  {
    task: 'Be happy',
    id: '77777',
    completed: false
  }
] as ITodo[];

const todoListAtom = atom(initialState);

const useTodoListAtom = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom);

  const loadTodoList = (savedTodoList: ITodo[]) => {
    setTodoList(savedTodoList);
  };

  const addTask = (task: string) => {
    if (task === '') return;

    const newTask = { task, completed: false, id: uuid() };
    setTodoList(prev => [newTask, ...prev]);
  };

  const deleteTask = (taskId: string) => {
    setTodoList(prev => prev.filter(todo => todo.id !== taskId));
  };

  const toggleTask = (taskId: string) => {
    setTodoList(prev =>
      prev.map(todo =>
        todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const modifyTask = (taskId: string, newTask: string) => {
    setTodoList(prev =>
      prev.map(todo => (todo.id === taskId ? { ...todo, task: newTask } : todo))
    );
  };

  const toggleAllTasks = () => {
    const isCompletedAll = todoList.every(todo => todo.completed);

    setTodoList(prev =>
      prev.map(todo => ({ ...todo, completed: !isCompletedAll }))
    );
  };

  const clearCompleted = () => {
    setTodoList(prev => prev.filter(todo => todo.completed === false));
  };

  return {
    todoList,
    loadTodoList,
    addTask,
    deleteTask,
    toggleTask,
    modifyTask,
    toggleAllTasks,
    clearCompleted
  };
};

export default useTodoListAtom;

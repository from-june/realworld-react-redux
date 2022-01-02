import { v4 as uuid } from 'uuid';

const loadTodoList = (state: ITodo[]) => {
  return {
    type: 'LOAD_TODO_LIST',
    payload: state
  };
};

const addTask = (task: string) => {
  if (task === '') return;

  const newTask = { task, completed: false, id: uuid() };

  return {
    type: 'ADD_TASK',
    payload: newTask
  };
};

const deleteTask = (taskId: string) => {
  return {
    type: 'DELETE_TASK',
    payload: { id: taskId }
  };
};

const toggleTask = (taskId: string) => {
  return {
    type: 'TOGGLE_TASK',
    payload: { id: taskId }
  };
};

const modifyTask = (taskId: string, newTask: string) => {
  return {
    type: 'MODIFY_TASK',
    payload: {
      id: taskId,
      task: newTask
    }
  };
};

const toggleAllTasks = {
  type: 'TOGGLE_ALL_TASKS'
};

const clearCompleted = {
  type: 'CLEAR_COMPLETED'
};

export {
  loadTodoList,
  addTask,
  modifyTask,
  deleteTask,
  toggleTask,
  toggleAllTasks,
  clearCompleted
};

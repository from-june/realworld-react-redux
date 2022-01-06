import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

interface Todo {
  id: string;
  task: string;
}

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    {
      task: 'Be happy',
      id: '77777',
      completed: false
    }
  ] as ITodo[],
  reducers: {
    loadTodoList: {
      reducer: (_, action: PayloadAction<ITodo[]>) => [...action.payload],
      prepare: (state: ITodo[]) => {
        return { payload: state };
      }
    },
    addTask: {
      reducer: (state, action: PayloadAction<ITodo>) =>
        action.payload.task !== '' ? [action.payload, ...state] : state,
      prepare: (task: string) => {
        const newTask = { task, completed: false, id: uuid() };
        return { payload: newTask };
      }
    },
    deleteTask: {
      reducer: (state, action: PayloadAction<string>) =>
        state.filter(todo => todo.id !== action.payload),
      prepare: (taskId: string) => {
        return { payload: taskId };
      }
    },
    toggleTask: {
      reducer: (state, action: PayloadAction<string>) =>
        state.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      prepare: (taskId: string) => {
        return { payload: taskId };
      }
    },
    modifyTask: {
      reducer: (state, action: PayloadAction<Todo>) =>
        state.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task }
            : todo
        ),
      prepare: (taskId: string, newTask: string) => {
        return { payload: { id: taskId, task: newTask } };
      }
    },
    toggleAllTasks: state => {
      const isCompletedAll = state.every(todo => todo.completed);
      return state.map(todo => ({ ...todo, completed: !isCompletedAll }));
    },
    clearCompleted: state => state.filter(todo => todo.completed === false)
  }
});

const { actions, reducer } = todoListSlice;

export const {
  loadTodoList,
  addTask,
  deleteTask,
  toggleTask,
  modifyTask,
  toggleAllTasks,
  clearCompleted
} = actions;

export default reducer;

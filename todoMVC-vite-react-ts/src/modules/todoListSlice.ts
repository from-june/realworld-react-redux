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
        state.filter(task => task.id !== action.payload),
      prepare: (taskId: string) => {
        return { payload: taskId };
      }
    },
    toggleTask: {
      reducer: (state, action: PayloadAction<string>) => {
        const targetTask = state.find(task => task.id === action.payload);

        if (targetTask) {
          targetTask.completed = !targetTask.completed;
        }
      },
      prepare: (taskId: string) => {
        return { payload: taskId };
      }
    },
    modifyTask: {
      reducer: (state, action: PayloadAction<Todo>) =>
        state.map(task =>
          task.id === action.payload.id
            ? { ...task, task: action.payload.task }
            : task
        ),
      prepare: (taskId: string, newTask: string) => {
        return { payload: { id: taskId, task: newTask } };
      }
    },
    toggleAllTasks: state => {
      const isCompletedAll = state.every(task => task.completed);
      return state.map(task => ({ ...task, completed: !isCompletedAll }));
    },
    clearCompleted: state => state.filter(task => task.completed === false)
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

import { combineReducers } from '@reduxjs/toolkit';
import {
  LOAD_TODO_LIST,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  MODIFY_TASK,
  TOGGLE_ALL_TASKS,
  CLEAR_COMPLETED
} from 'modules/actions/types';

const initialState: ITodo[] = [
  {
    task: 'Be happy',
    id: '1234',
    completed: false
  }
];

const todoListReducer = (
  state = initialState,
  action:
    | {
        type: 'LOAD_TODO_LIST';
        payload: ITodo[];
      }
    | {
        type: 'ADD_TASK' | 'DELETE_TASK' | 'TOGGLE_TASK' | 'MODIFY_TASK';
        payload: ITodo;
      }
    | {
        type: 'TOGGLE_ALL_TASKS' | 'CLEAR_COMPLETED';
      }
) => {
  switch (action.type) {
    case LOAD_TODO_LIST:
      return [...action.payload];

    case ADD_TASK:
      return [action.payload, ...state];

    case DELETE_TASK:
      return state.filter(todo => todo.id !== action.payload.id);

    case TOGGLE_TASK:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case MODIFY_TASK:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.task }
          : todo
      );

    case TOGGLE_ALL_TASKS:
      const isCompletedAll = state.every(todo => todo.completed);
      return state.map(todo => ({ ...todo, completed: !isCompletedAll }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
};

export default combineReducers({
  todoList: todoListReducer
});

const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const GET_TODO = 'GET_TODO';
const GET_TODOS = 'GET_TODOS';
const GET_TODOS_COMPLETE = 'GET_TODOS_COMPLETE';
const REQUEST_FAILED = 'REQUEST_FAILED';
const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = todo => ({
  todo,
  type: ADD_TODO,
});

export const updateTodo = todo => ({
  todo,
  type: UPDATE_TODO,
});

export const deleteTodo = id => ({
  id,
  type: DELETE_TODO,
});

export const completeTodo = id => ({
  id,
  type: COMPLETE_TODO,
});

export const getTodo = id => ({
  id,
  type: GET_TODO,
});

export const getTodos = () => ({
  type: GET_TODOS,
});

export const getTodosComplete = todos => ({
  todos,
  type: GET_TODOS_COMPLETE,
});

export const requestFailed = () => ({
  type: REQUEST_FAILED,
})

export default {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODO,
  GET_TODOS,
  GET_TODOS_COMPLETE,
  REQUEST_FAILED,
  UPDATE_TODO,
}

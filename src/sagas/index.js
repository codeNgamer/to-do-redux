import { call, put, takeLatest } from 'redux-saga/effects';
import actions, {
  getTodosComplete,
  requestFailed,
} from '../actions';
import Api from '../API.js';

function* fetchTodos(action) {
  try {
    const todos = yield call(Api.fetchTodos);
    yield put(getTodosComplete(todos));
  } catch (e) {
    yield put(requestFailed);
  }
}

function* addTodo(action) {
  try {
    const todos = yield call(Api.addTodo, action.todo);
    yield put(getTodosComplete(todos));
  } catch (e) {
    yield put(requestFailed);
  }
}

function* completeTodo(action) {
  try {
    const todos = yield call(Api.completeTodo, action.id);
    yield put(getTodosComplete(todos));
  } catch (e) {
    yield put(requestFailed);
  }
}
function* deleteTodo(action) {
  try {
    const todos = yield call(Api.deleteTodo, action.id);
    yield put(getTodosComplete(todos));
  } catch (e) {
    yield put(requestFailed);
  }
}
function* updateTodo(action) {
  try {
    const todos = yield call(Api.updateTodo, action.todo);
    yield put(getTodosComplete(todos));
  } catch (e) {
    yield put(requestFailed);
  }
}

function* rootSaga() {
  yield takeLatest(actions.ADD_TODO, addTodo);
  yield takeLatest(actions.COMPLETE_TODO, completeTodo);
  yield takeLatest(actions.DELETE_TODO, deleteTodo);
  yield takeLatest(actions.GET_TODOS, fetchTodos);
  yield takeLatest(actions.UPDATE_TODO, updateTodo);
}

export default rootSaga;

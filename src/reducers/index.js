import { combineReducers } from 'redux';
import _ from 'lodash';
import actions from '../actions';
const defaultState = {
  rows: [],
  activeTodo: {}
}
const todos = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        fetching:false
      }
    case actions.GET_TODO:
      return {
        ...state,
        activeTodo: _.find(state.rows, {id: parseInt(action.id, 10)}),
      }
    case actions.GET_TODOS:
      return {
        ...state,
        fetching: true
      }
    case actions.GET_TODOS_COMPLETE:
      return {
        ...state,
        rows: action.todos,
        fetching:false
      }
    default:
      return state
  }
}
const reducer = combineReducers({
  todos,
});

export default reducer;


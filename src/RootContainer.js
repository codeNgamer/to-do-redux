import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  addTodo,
  deleteTodo,
  getTodos,
} from './actions';
import AddNewTask from './AddNewTask.js';
import Tasks from './Tasks.js';
import TaskDetail from './TaskDetail.js';

const Home = props => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={12} lg={12}>
        <AddNewTask addTodo={props.addTodo} />
      </Grid>
      <Grid item xs={10} md={10} lg={10}>
        <Tasks todos={props.todos.rows} deleteTodo={props.deleteTodo} />
      </Grid>
    </Grid>
  );
}


class RootContainer extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} addTodo={this.props.addTodo} deleteTodo={this.props.deleteTodo} todos={this.props.todos} /> }
          />
          <Route
            path="/task-detail/:id"
            render={(props) => <TaskDetail {...props} /> }
          />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => {
      dispatch(getTodos())
    },
    addTodo: todo => {
      dispatch(addTodo(todo))
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

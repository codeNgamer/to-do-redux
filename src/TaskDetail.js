import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Icon,
  TextField,
} from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import _ from 'lodash';
import {
  completeTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from './actions';

const ActionsRow = props => (
  <Grid container spacing={8} className="actionRowContainer">
    <Grid item xs={4} md={4} lg={4}>
      <Button variant="contained" color="primary" onClick={props.updateTodo}>
        Save
      </Button>
    </Grid>
    <Grid item xs={4} md={4} lg={4}>
      <Button onClick={props.cancel} variant="contained">
        Cancel
      </Button>
    </Grid>
    <Grid item xs={4} md={4} lg={4}>
      <Button variant="contained" onClick={props.deleteTodo} color="secondary">
        Delete
      </Button>
    </Grid>
  </Grid>
);
const TaskDescription = props => (
  <Grid container spacing={8}>
    <Grid item xs={12} md={8} lg={8}>
      <TextField
        fullWidth
        multiline
        rows={3}
        placeholder="Enter Task"
        label="Description"
        margin="normal"
        value={props.description}
        onChange={props.updateDescription}
      />
    </Grid>
  </Grid>
);
const TaskNameRow = props => (
  <Grid container spacing={8}>
    <Grid item xs={8} md={8} lg={8}>
      <TextField
        fullWidth
        value={props.title}
        onChange={props.updateTitle}
        placeholder="Enter Task"
        label="Task"
        margin="normal"
      />
    </Grid>
    <Grid item xs={2} md={2} lg={2}>
      <Button onClick={props.completeTodo} disabled={props.isTaskComplete} variant="contained" color="primary">
        Complete
      </Button>
    </Grid>
  </Grid>
);

class TaskDetailWithoutStyles extends Component {
  constructor(props) {
    super(props);
    const activeTodo = { title: '', description: ''};
    this.state = {
      activeTodo,
      title: activeTodo.title,
      description: activeTodo.description
    }
    this.completeTodo = this.completeTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }
  componentDidMount() {
    this.props.getTodo(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps){
    if (!nextProps.todos.rows.length) return false;
    const activeTodo = _.find(nextProps.todos.rows, {id: parseInt(nextProps.match.params.id, 10)});
    if (!activeTodo) {
      nextProps.history.push('/')
      return false
    }
    this.setState({
      activeTodo,
      title: activeTodo.title,
      description: activeTodo.description
    })
  }
  completeTodo() {
    this.props.completeTodo(this.state.activeTodo.id)
    this.props.history.push('/')
  }
  deleteTodo() {
    this.props.deleteTodo(this.state.activeTodo.id)
  }
  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  updateTodo() {
    this.props.updateTodo({
      id: this.state.activeTodo.id,
      title: this.state.title,
      description: this.state.description
    });
    this.props.history.push('/')
  }
  updateDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  render() {
    return (
      <div className={this.props.classes.taskDetailContainer}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={12} lg={12}>
            <Link to={`/`}>
              <p><Icon>arrow_back</Icon>Back to tasks</p>
            </Link>
          </Grid>
          <TaskNameRow
            title={this.state.title}
            updateTitle={this.updateTitle}
            completeTodo={this.completeTodo}
            isTaskComplete={this.state.activeTodo.completed}
          />
          <TaskDescription description={this.state.description} updateDescription={this.updateDescription} />
          <ActionsRow deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} cancel={() => this.setState({
            title: this.state.activeTodo.title,
            description: this.state.activeTodo.description
          })} />
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    completeTodo: id => {
      dispatch(completeTodo(id))
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
    getTodo: id => {
      dispatch(getTodo(id))
    },
    updateTodo: todo => {
      dispatch(updateTodo(todo))
    },
  }
}
const styles = {
  taskDetailContainer: {
    margin: '10px'
  }
}
const TaskDetail = withStyles(styles)(TaskDetailWithoutStyles);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);

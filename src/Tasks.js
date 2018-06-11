import React from 'react';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';

const Tasks = props => {
  const { todos } = props
  return (
    <div>
      <List component="nav">
        {
          todos.map(todo => (
            <ListItem key={todo.id} button>
              <Link to={`/task-detail/${todo.id}`}>
                <ListItemText inset  className={todo.completed ? 'strikeout': ''} primary={todo.title} />
                <ListItemText inset primary={todo.completed ? 'Completed' : ''} />
              </Link>
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => props.deleteTodo(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}
export default Tasks;

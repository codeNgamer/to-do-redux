import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogTitle,
  TextField,
  Typography,
} from '@material-ui/core';

const ErrorDialog = props => {
  return (
    <Dialog aria-labelledby="ErrorDialog" {...props}>
      <DialogTitle id="simple-dialog-title">Error</DialogTitle>
      <div>
        Title is needed!
      </div>
    </Dialog>
  )
}

class AddNewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      dialogOpen: false
    }
    this.addTodo = this.addTodo.bind(this);
    this.onDialogClose = this.onDialogClose.bind(this);
  }
  addTodo() {
    const {
      title,
    } = this.state;

    if (!title) {
      return this.setState({
        dialogOpen: true
      })
    }
    this.props.addTodo({
      title,
    })
    this.setState({
      title: ''
    });
  }
  onDialogClose() {
    this.setState({
      dialogOpen: false
    })
  }
  render() {
    return (
      <div>
        <ErrorDialog onClose={this.onDialogClose} open={this.state.dialogOpen} />
        <Card className="">
          <CardContent>
            <Typography>
              TO-DO
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter TO-DO title"
              value={this.state.title}
              onChange={e => {
                this.setState({
                  title: e.target.value
                })
              }}
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button onClick={this.addTodo} variant="contained" color="primary">
              Add new To-do
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default AddNewTask;

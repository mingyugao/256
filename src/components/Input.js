import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  OutlinedInput,
  Button
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 2em',
    [theme.breakpoints.up('md')]: {
      padding: '0 20%'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& > button': {
      color: '#ffffff',
      boxShadow: 'none',
      transition: 'all 100ms linear 0s',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        boxShadow: 'none'
      }
    }
  },
  input: {
    flexGrow: '1',
    [theme.breakpoints.up('md')]: {
      marginRight: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0.5em'
    }
  }
});

class Input extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render = () => {
    const {
      classes,
      handleSubmit
    } = this.props;

    return (
      <div className={classes.root}>
        <OutlinedInput
          className={classes.input}
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(this.state.value)}
        >
          Convert
        </Button>
      </div>
    );
  };
}

export default withStyles(styles)(Input);

import React, { useState } from 'react';
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

const Input = ({
  classes,
  handleSubmit
}) => {
  const [value, setValue] = useState('');

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(value);
      e.target.blur();
    }
  };

  return (
    <div className={classes.root}>
      <OutlinedInput
        className={classes.input}
        autoFocus
        placeholder="Try a color, e.g #ff7875 or rgb(255,145,143)"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={e => handleKeyPress(e)}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleSubmit(value)}
      >
        CONVERT
      </Button>
    </div>
  );
};

export default withStyles(styles)(Input);

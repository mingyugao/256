import React from 'react';
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
    padding: '0 20%',
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
    marginRight: '1em'
  }
});

const Input = ({
  classes,
  value,
  handleChange
}) => (
  <div className={classes.root}>
    <OutlinedInput
      className={classes.input}
      value={value}
      onChange={handleChange}
    />
    <Button
      color="primary"
      variant="contained"
    >
      Convert
    </Button>
  </div>
);

export default withStyles(styles)(Input);

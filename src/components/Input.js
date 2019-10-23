import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  OutlinedInput,
  Button
} from '@material-ui/core';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 2em',
    padding: '0 20%',
    '& > button': {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      }
    }
  },
  input: {
    flexGrow: '1',
    marginRight: '1em'
  }
};

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
      variant="outlined"
    >
      Convert
    </Button>
  </div>
);

export default withStyles(styles)(Input);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {}
};

const Output = ({
  classes,
  input
}) => {
  return (
    <div className={classes.root}>
      {input}
    </div>
  );
};

export default withStyles(styles)(Output);

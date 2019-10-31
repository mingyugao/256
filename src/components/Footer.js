import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const styles = {
  root: {
    margin: '5em 0 2em',
    fontSize: '0.5em'
  }
};

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Divider />
    <p>
      This webpage was created and is maintained by&nbsp;
      <a
        href="https://github.com/mingyugao"
        rel="noopener noreferrer"
      >
        Mingyu Gao
      </a>
      .
    </p>
  </div>
);

export default withStyles(styles)(Footer);

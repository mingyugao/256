import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '0 0 2rem',
    width: '100%',
    height: '1.5em',
    background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    color: '#ffffff',
    cursor: 'default',
    fontSize: '2em',
    lineHeight: '1.5em',
    fontWeight: 'lighter',
    textAlign: 'center'
  }
};

const Header = ({ classes }) => (
  <header className={classes.root}>
    COLOR CONVERTER
  </header>
);

export default withStyles(styles)(Header);

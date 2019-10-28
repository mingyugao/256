import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    height: '50px',
    margin: '0 0 2rem',
    background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    color: '#ffffff',
    cursor: 'default',
    fontSize: '2em',
    lineHeight: '50px',
    fontWeight: 'lighter',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '0',
      left: '0'
    }
  }
});

const Header = ({ classes }) => (
  <header className={classes.root}>
    COLOR CONVERTER
  </header>
);

export default withStyles(styles)(Header);

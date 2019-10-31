import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Divider
} from '@material-ui/core';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Footer from './components/Footer';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '50px'
    },
    '& p': {
      padding: '0 5%',
      lineHeight: '1.3em'
    },
    '& a': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      transition: 'all 100ms linear 0s',
      '&:hover': {
        color: theme.palette.secondary.light,
        textDecoration: 'underline'
      }
    }
  }
});

const App = ({
  classes
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = value => {
    if (value) setInput(value);
  };

  return (
    <Container
      className={classes.root}
      maxWidth="md"
    >
      <div>
        <Header />
        <p>
          Find the nearest 8-bit (Xterm) color of a HEX or RGB color.
          For a full list of the Xterm colors, see this reference:&nbsp;
          <a
            href="https://jonasjacek.github.io/colors"
            rel="noopener noreferrer"
          >
            256 Colors Cheat Sheet
          </a>
          .
        </p>
        <Input
          handleSubmit={handleSubmit}
        />
        <Divider />
        <Output input={input} />
      </div>
      <Footer />
    </Container>
  );
};

export default withStyles(styles)(App);

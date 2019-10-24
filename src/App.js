import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Divider
} from '@material-ui/core';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Footer from './components/Footer';

const styles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& p': {
      padding: '0 5%',
      lineHeight: '1.3em'
    },
    '& a': {
      color: '#40a9ff',
      textDecoration: 'none',
      transition: 'all 100ms linear 0s',
      '&:hover': {
        color: '#096dd9',
        textDecoration: 'underline'
      }
    }
  }
};

class App extends Component {
  state = {
    input: ''
  };

  handleSubmit = input => {
    if (input) {
      this.setState({ input });
    }
  };

  render = () => {
    const { classes } = this.props;

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
            handleSubmit={this.handleSubmit}
          />
          <Divider />
          <Output input={this.state.input} />
        </div>
        <Footer />
      </Container>
    );
  };
}

export default withStyles(styles)(App);

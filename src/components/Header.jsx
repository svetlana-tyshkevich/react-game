/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppBar, Toolbar, Typography, TextField,
} from '@material-ui/core';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import Navbar from './navbar.jsx';
import { gameTheme } from '../themes/theme.jsx';

const styles = {
  headerRoot: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
  },
  menuButton: {
    marginRight: 20,
  },
  title: {
    flexGrow: 1,
    position: 'relative',
    marginLeft: 20,
  },
  text: {
    marginRight: 50,
    marginLeft: 50,
    position: 'relative',
    fontSize: 20,
  },

};

class Header extends Component {
  render() {
    const {
      classes, userName, updateUsername, stats,
    } = this.props;
    const bestScore = stats.sort((a, b) => b.score - a.score)[0]?.score || 0;

    const nameChange = (event) => {
      updateUsername(event.target.value);
    };

    return (
      <ThemeProvider theme={gameTheme}>
        <AppBar className={classes.headerRoot}>
          <Toolbar>
            <Navbar />
            <Typography variant="h4" className={classes.title}>
              Snake Game
            </Typography>
            <TextField
              autoFocus
              id="userName"
              label="Name"
              value={userName}
              onChange={nameChange}
              color="primary"
            />
            <Typography variant="body1" className={classes.text}>
              {`Your best score is ${bestScore}`}
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
  userName: PropTypes.string,
  stats: PropTypes.array,
  updateUsername: PropTypes.func,
};

export default withStyles(styles)(Header);

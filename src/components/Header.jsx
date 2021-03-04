/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navbar from './navbar.jsx';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
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
    position: 'relative',
    fontSize: 20,
  },
};

class Header extends Component {
  render() {
    const { classes, userName, stats } = this.props;
    const bestScore = stats.sort((a, b) => b.score - a.score)[0].score || 0;

    return (
      <AppBar position="static">
        <Toolbar>
          <Navbar />
          <Typography variant="h4" className={classes.title}>
            Snake Game
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {`Hello, ${userName}!`}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {`Your best score is ${bestScore}`}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
  userName: PropTypes.string,
  stats: PropTypes.array,
};

export default withStyles(styles)(Header);

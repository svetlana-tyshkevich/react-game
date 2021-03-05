/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    flexGrow: 1,
    position: 'relative',
    marginTop: 20,
    textAlign: 'center',
  },
  paperBox: {
    width: 400,
    margin: '30px auto',
    fontSize: 22,
    padding: 13,
  },
};
class Help extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h3" className={classes.title}>
          Help
        </Typography>
        <Paper elevation={0} className={classes.paperBox}>
          Enter your name in the top bar of the application to see it in
          statistics.
        </Paper>
        <Paper elevation={0} className={classes.paperBox}>
          The game is controlled by using the keys <KeyboardArrowLeftIcon />,
          <KeyboardArrowRightIcon />, <KeyboardArrowDownIcon />,{' '}
          <KeyboardArrowUpIcon /> and Space for pause.
        </Paper>

        <Paper elevation={0} className={classes.paperBox}>
          On the Settings page, you can select a character, background music,
          game difficulty, and also change sound settings.
        </Paper>
      </div>
    );
  }
}

Help.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Help);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  buttonsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 250,
    height: 150,
    margin: 100,
  },
};

class GameButtons extends Component {
  render() {
    const { pause, onClick, classes } = this.props;

    return (
      <div className={classes.buttonsBox}>
        <Button variant="contained" color="secondary">
          New Game
        </Button>
        <Button variant="contained" color="secondary" onClick={onClick}>
          {pause ? 'Continue' : 'Pause'}
        </Button>
      </div>
    );
  }
}

GameButtons.propTypes = {
  pause: PropTypes.boolean,
  classes: PropTypes.object,
  onClick: PropTypes.function,
};

export default withStyles(styles)(GameButtons);

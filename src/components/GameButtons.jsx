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
    margin: 20,
  },
};

class GameButtons extends Component {
  render() {
    const {
      pause, onClickPause, onClickNew, classes,
    } = this.props;

    return (
      <div className={classes.buttonsBox}>
        <Button variant="contained" color="secondary" onClick={onClickNew}>
          New Game
        </Button>
        <Button variant="contained" color="secondary" onClick={onClickPause}>
          {pause ? 'Continue' : 'Pause'}
        </Button>
      </div>
    );
  }
}

GameButtons.propTypes = {
  pause: PropTypes.bool,
  classes: PropTypes.object,
  onClickPause: PropTypes.func,
  onClickNew: PropTypes.func,
};

export default withStyles(styles)(GameButtons);

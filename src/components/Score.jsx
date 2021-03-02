import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
  scoreBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 150,
    margin: 100,
    fontSize: 35,
  },
};

class Score extends Component {
  render() {
    const { score, classes } = this.props;

    return (
      <div>
        <Paper className={classes.scoreBox}>{`Score: ${score}`}</Paper>
      </div>
    );
  }
}

Score.propTypes = {
  score: PropTypes.number,
  classes: PropTypes.object,
};

export default withStyles(styles)(Score);

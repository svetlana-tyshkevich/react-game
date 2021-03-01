import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Score extends Component {
  render() {
    const { score } = this.props;

    return <div>{`Score: ${score}`}</div>;
  }
}

Score.propTypes = {
  score: PropTypes.number,
};

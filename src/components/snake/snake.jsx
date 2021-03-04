/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './snake.css';

export default class Snake extends Component {
  render() {
    const { snake, character } = this.props;
    const snakeBody = snake.map((cell, index) => (
        <div
          className={`${character}-cell`}
          style={{
            left: `${snake[index].x}px`,
            top: `${snake[index].y}px`,
          }}></div>
    ));
    return <div>{snakeBody}</div>;
  }
}

Snake.propTypes = {
  snake: PropTypes.array,
  character: PropTypes.string,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snake from './snake/snake';
import Apple from './apple/apple';
import '../App/App.css';

export default class GameField extends Component {
  render() {
    const { gameFieldText, apple, snake } = this.props;

    return (
      <div className={'gameField'}>
        <div className={'gameFieldText'}>{gameFieldText}</div>
        <Apple apple={apple} />
        <Snake snake={snake} />
      </div>
    );
  }
}

GameField.propTypes = {
  gameFieldText: PropTypes.string,
  apple: PropTypes.object,
  snake: PropTypes.array,
};

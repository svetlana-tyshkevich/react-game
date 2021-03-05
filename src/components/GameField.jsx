import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snake from './snake/snake.jsx';
import Apple from './apple/apple.jsx';
import '../App/App.css';

export default class GameField extends Component {
  render() {
    const {
      gameFieldText,
      apple,
      snake,
      character,
      isApple,
      gameIn,
    } = this.props;

    return (

        <div className={'gameField'}>
          <div className={'gameFieldText'}>{gameFieldText}</div>
          {gameIn && isApple && <Apple apple={apple} character={character} />}
          {gameIn && <Snake snake={snake} character={character} />}
        </div>

    );
  }
}

GameField.propTypes = {
  gameFieldText: PropTypes.string,
  apple: PropTypes.object,
  snake: PropTypes.array,
  character: PropTypes.string,
  isApple: PropTypes.bool,
  gameIn: PropTypes.bool,
};

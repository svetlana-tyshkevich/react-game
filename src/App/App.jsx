/* eslint-disable consistent-return */
import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import GameField from '../components/GameField.jsx';
import Score from '../components/Score.jsx';
import './App.css';

export default class App extends Component {
  state = {
    snakeLength: 4,
    snake: [{ x: 330, y: 450 }],
    step: 15,
    direction: 'right',
    apple: {},
    score: 0,
    userName: 'stranger',
    gameFieldText: '',
    pause: false,
  };

  componentDidMount() {
    this.init();
    window.addEventListener('keydown', this.keyControls);
    this.moveTimer = setInterval(() => {
      this.move();
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.moveTimer);
    window.removeEventListener('keydown', this.keyControls);
  }

  init = () => {
    const { snake } = this.state;
    for (let i = 1; i < this.state.snakeLength; i += 1) {
      const bodyElement = {
        x: snake[0].x - i * this.state.step,
        y: snake[0].y,
      };
      snake.push(bodyElement);
    }
    this.generateApple();
    this.setState({ snake });
  };

  keyControls = (e) => {
    let { direction } = this.state;
    switch (e.keyCode) {
      case 37:
        if (this.state.direction !== 'right') direction = 'left';
        else direction = 'right';
        break;
      case 38:
        if (this.state.direction !== 'down') direction = 'up';
        else direction = 'down';
        break;
      case 39:
        if (this.state.direction !== 'left') direction = 'right';
        else direction = 'left';
        break;
      case 40:
        if (this.state.direction !== 'up') direction = 'down';
        else direction = 'up';
        break;
      case 32:
        if (this.state.pause === false) this.pauseGame();
        else {
          this.moveTimer = setInterval(() => {
            this.move();
          }, 200);
          this.setState({ gameFieldText: '', pause: false });
        }
        break;
      default:
    }
    this.setState({ direction });
  };

  move = () => {
    const { snake } = this.state;
    let { score } = this.state;
    const { step } = this.state;
    const newHeadX = () => {
      switch (this.state.direction) {
        case 'right':
          return snake[0].x < 585 ? snake[0].x + step : 0;

        case 'left':
          return snake[0].x > 0 ? snake[0].x - step : 585;

        case 'up':
          return snake[0].x;

        default:
          return snake[0].x;
      }
    };

    const newHeadY = () => {
      switch (this.state.direction) {
        case 'right':
          return snake[0].y;

        case 'left':
          return snake[0].y;

        case 'up':
          return snake[0].y > 0 ? snake[0].y - step : 585;

        case 'down':
          return snake[0].y < 585 ? snake[0].y + step : 0;

        default:
          return snake[0].y;
      }
    };

    snake.unshift({ x: newHeadX(), y: newHeadY() });

    for (let i = 1; i < snake.length; i += 1) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) this.finishGame();
    }

    if (
      snake[0].x === this.state.apple.x
      && snake[0].y === this.state.apple.y
    ) {
      this.generateApple();
      score += 1;
    } else {
      snake.pop();
    }

    this.setState({ snake, score });
  };

  generateApple = () => {
    const randomPosition = () => Math.floor(Math.random() * (585 / this.state.step));
    const apple = {};

    apple.x = randomPosition() * this.state.step;
    apple.y = randomPosition() * this.state.step;

    this.setState({ apple });
  };

  pauseGame = () => {
    clearInterval(this.moveTimer);
    this.setState({ gameFieldText: 'Pause', pause: true });
  };

  finishGame = () => {
    clearInterval(this.moveTimer);
    this.setState({ gameFieldText: 'Game Over' });
  };

  render() {
    const {
      snake, apple, score, userName, gameFieldText,
    } = this.state;
    return (
      <div
        style={{
          backgroundColor: '#80b6f2',
          fontFamily: 'Roboto, sanf-serif',
        }}>
        <Header userName={userName} />
        <div style={{ display: 'flex' }}>
          <GameField
            className={'gameField'}
            gameFieldText={gameFieldText}
            apple={apple}
            snake={snake}
          />
          <Score score={score} />
        </div>
      </div>
    );
  }
}

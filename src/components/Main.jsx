/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { Component } from 'react';

import GameField from './GameField.jsx';
import Score from './Score.jsx';
import GameButtons from './GameButtons.jsx';

import soundEating from '../assets/sounds/eating.mp3';
import soundNewGame from '../assets/sounds/new-game.mp3';
import soundEnd from '../assets/sounds/end.mp3';

export default class Main extends Component {
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
    music: true,
    musicVolume: 0.3,
    sounds: true,
    soundsVolume: 1,
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
        this.pauseGame();
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
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
        this.finishGame();
        this.playSound(soundEnd);
      }
    }

    if (
      snake[0].x === this.state.apple.x
      && snake[0].y === this.state.apple.y
    ) {
      this.generateApple();
      score += 1;
      this.playSound(soundEating);
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
    if (this.state.pause === false) {
      clearInterval(this.moveTimer);
      this.setState({ gameFieldText: 'Pause', pause: true });
    } else {
      this.moveTimer = setInterval(() => {
        this.move();
      }, 200);
      this.setState({ gameFieldText: '', pause: false });
    }
  };

  finishGame = () => {
    clearInterval(this.moveTimer);
    this.setState({ gameFieldText: 'Game Over' });
  };

  newGame = () => {
    clearInterval(this.moveTimer);
    this.setState(
      {
        snakeLength: 4,
        snake: [{ x: 330, y: 450 }],
        step: 15,
        direction: 'right',
        apple: {},
        score: 0,
        userName: 'stranger',
        gameFieldText: '',
        pause: false,
      },
      () => {
        this.init();
        this.moveTimer = setInterval(() => {
          this.move();
        }, 200);
      },
    );
    this.playSound(soundNewGame);
  };

    playSound = (source) => {
      const myAudio = new Audio();
      myAudio.src = source;
      myAudio.play();
      myAudio.volume = this.state.soundsVolume;
    };

    render() {
      const {
        snake, apple, score, gameFieldText, pause,
      } = this.state;
      return (
      <div style={{ display: 'flex' }}>
        <GameButtons
          pause={pause}
          onClickPause={this.pauseGame}
          onClickNew={this.newGame}
        />
        <GameField
          className={'gameField'}
          gameFieldText={gameFieldText}
          apple={apple}
          snake={snake}
        />
        <Score score={score} />
      </div>
      );
    }
}

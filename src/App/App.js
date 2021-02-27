import React, { Component } from 'react';
import Snake from '../components/snake/snake';
import Apple from '../components/apple/apple';
import './App.css';

export default class App extends Component {
  state = {
    snakeLength: 4,
    snake: [{ x: 330, y: 450 }],
    step: 15,
    direction: 'right',
    apple: {},
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
    let snake = this.state.snake;
    for (let i = 1; i < this.state.snakeLength; i += 1) {
      let bodyElement = {
        x: snake[0].x - i * this.state.step,
        y: snake[0].y,
      };
      snake.push(bodyElement);
    }
    this.generateApple();
    this.setState({ snake });
  };

  keyControls = (e) => {
    let direction = '';
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
      default:
    }
    console.log(direction);
    this.setState({ direction });
  };

  move = () => {
    const snake = this.state.snake;
    const step = this.state.step;
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
      }
    };
    if (
      snake[0].x === this.state.apple.x &&
      snake[0].y === this.state.apple.y
    ) {
      this.generateApple();
    } else {
      snake.pop();
    }

    for (let i = 1; i < snake.length; i += 1) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y)
        this.finishGame();
    }

    snake.unshift({ x: newHeadX(), y: newHeadY() });

    this.setState({ snake });
  };

  generateApple = () => {
    const randomPosition = () => {
      return Math.floor(Math.random() * (585 / this.state.step));
    };
    const apple = {};

    apple.x = randomPosition() * this.state.step;
    apple.y = randomPosition() * this.state.step;

    this.setState({ apple });
  };

  pauseGame = () =>{
    clearInterval(this.moveTimer);
  }

  finishGame = () => {
    clearInterval(this.moveTimer);
  }

  render() {
    const { snake, apple } = this.state;
    return (
      <div className="app">
        <div className={'gameField'}>
          <Apple apple={apple} />
          <Snake snake={snake} />
        </div>
      </div>
    );
  }
}

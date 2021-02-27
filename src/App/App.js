import React, { Component } from 'react';
import Snake from '../components/snake/snake';
import './App.css';

export default class App extends Component {
  state = {
    snakeLength: 4,
    snake: [{ x: 330, y: 450 }],
    step: 15,
    direction: 'right',
  };

  componentDidMount() {
    this.init();
    window.addEventListener('keydown', this.keyControls);
    this.moveTimer = setInterval(() => {
      this.move();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.moveTimer);
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
    this.setState({ snake });
  };

  keyControls = (e) => {
    let direction = '';
    switch (e.keyCode) {
      case 37:
        if (this.state.direction !=='right') direction = 'left';
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
  }

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

    snake.unshift({ x: newHeadX(), y: newHeadY() });
    snake.pop();
    this.setState({ snake });
  };

  render() {
    const { snake } = this.state;
    return (
      <div className="app">
        <div className={'gameField'}>
          <Snake snake={snake} />
        </div>
      </div>
    );
  }
}

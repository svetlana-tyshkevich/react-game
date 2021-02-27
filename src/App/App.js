import React, { Component } from 'react';
import Snake from '../components/snake/snake';
import './App.css';

export default class App extends Component {
  state = {
    snakeLength: 4,
    snake: [],
    headPosition: {
      x: 330,
      y: 450,
    },
    step: 15,
    direction: 'right',
  };

  componentDidMount() {
    this.init();
    this.moveTimer = setInterval(() => {
      this.move();
      console.log(this.state.headPosition);
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.moveTimer);
  }

  init = () => {
    let snake = [];
    let headPosition = this.state.headPosition;
    snake.push(headPosition);
    for (let i = 1; i < this.state.snakeLength; i += 1) {
      let bodyElement = {
        x: headPosition.x - i * this.state.step,
        y: headPosition.y,
      };
      snake.push(bodyElement);
    }
    this.setState({ snake });
  };

  move = () => {
    const snake = this.state.snake;
    const step = this.state.step;
    const newHeadX = snake[0].x < 585 ? snake[0].x + step : 0;
    const newHeadY = snake[0].y;
    snake.unshift({ x: newHeadX, y: newHeadY });
    snake.pop();
    this.setState({ snake });
    console.log(snake);
  };

  render() {
    const { snakeLength, snake, headPosition, step } = this.state;
    return (
      <div className="app">
        <div className={'gameField'}>
          <Snake
            length={snakeLength}
            snake={snake}
            headPosition={headPosition}
            step={step}
          />
        </div>
      </div>
    );
  }
}

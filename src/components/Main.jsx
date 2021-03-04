/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Fullscreen from 'fullscreen-react';
import stateInLS from '../utils/stateInLS';
import GameField from './GameField.jsx';
import Score from './Score.jsx';
import GameButtons from './GameButtons.jsx';
// import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import soundEating from '../assets/sounds/eating.mp3';
import soundNewGame from '../assets/sounds/new-game.mp3';
import soundEnd from '../assets/sounds/end.mp3';

export default class Main extends Component {
  state = {
    snakeLength: 4,
    snake: [
      { x: 330, y: 450 },
      { x: 315, y: 450 },
      { x: 300, y: 450 },
      { x: 285, y: 450 },
    ],
    step: 15,
    direction: 'right',
    apple: { x: 60, y: 255 },
    score: 0,
    gameFieldText: '',
    pause: false,
    isEnter: false,
    points: 0,
  };

  getInterval = () => {
    let interval = 0;
    let points = 0;
    switch (this.props.speed) {
      case 'low':
        interval = 160;
        points = 10;
        break;
      case 'medium':
        interval = 110;
        points = 20;
        break;
      case 'high':
        interval = 70;
        points = 30;
        break;

      default:
    }
    this.setState({ points });
    localStorage.setItem('points', JSON.stringify(points));
    return interval;
  };

  componentDidMount() {
    const setState = this.setState.bind(this);
    stateInLS(this.state, setState);
    window.addEventListener('keydown', this.keyControls);
    this.moveTimer = setInterval(() => {
      this.move();
    }, this.getInterval());
  }

  componentDidUpdate(prevProps) {
    if (this.props.soundsVolume !== prevProps.soundsVolume) {
      this.soundsAudio.volume = this.props.soundsVolume;
    }
  }

  componentWillUnmount() {
    clearInterval(this.moveTimer);
    window.removeEventListener('keydown', this.keyControls);
  }

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
    localStorage.setItem('direction', JSON.stringify(direction));
  };

  move = () => {
    const { snake, step, points } = this.state;
    let { score } = this.state;
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
      score += points;
      this.playSound(soundEating);
    } else {
      snake.pop();
      localStorage.setItem('snakeLength', JSON.stringify(snake.length));
    }

    this.setState({ snake, score });

    localStorage.setItem('snake', JSON.stringify(snake));
    localStorage.setItem('score', JSON.stringify(score));
  };

  generateApple = () => {
    const randomPosition = () => Math.floor(Math.random() * (585 / this.state.step));
    const apple = {};

    apple.x = randomPosition() * this.state.step;
    apple.y = randomPosition() * this.state.step;

    this.setState({ apple });
    localStorage.setItem('apple', JSON.stringify(apple));
  };

  pauseGame = () => {
    if (this.state.pause === false) {
      clearInterval(this.moveTimer);
      this.setState({ gameFieldText: 'Pause', pause: true });
    } else {
      this.moveTimer = setInterval(() => {
        this.move();
      }, this.getInterval());
      this.setState({ gameFieldText: '', pause: false });
    }
  };

  finishGame = () => {
    const { stats, userName } = this.props;
    const { score } = this.state;
    clearInterval(this.moveTimer);
    stats.push({ userName, score });
    this.setState({ gameFieldText: 'Game Over', stats });
    localStorage.setItem('stats', JSON.stringify(stats));
  };

  newGame = () => {
    clearInterval(this.moveTimer);
    this.setState(
      {
        snakeLength: 4,
        snake: [
          { x: 330, y: 450 },
          { x: 315, y: 450 },
          { x: 300, y: 450 },
          { x: 285, y: 450 },
        ],
        step: 15,
        direction: 'right',
        apple: { x: 60, y: 255 },
        score: 0,
        gameFieldText: '',
        pause: false,
      },
      () => {
        this.moveTimer = setInterval(() => {
          this.move();
        }, this.getInterval());
      },
    );
    this.playSound(soundNewGame);
  };

  playSound = (source) => {
    this.soundsAudio = new Audio();
    this.soundsAudio.src = source;
    this.soundsAudio.play();
    this.soundsAudio.volume = this.props.soundsVolume;
  };

  setIsEnter = () => {
    this.setState({ isEnter: true });
  };

  render() {
    const {
      snake, apple, score, gameFieldText, pause, isEnter,
    } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <Fullscreen isEnter={isEnter} onChange={this.setIsEnter}>
          <div
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
            className={'full-screenable-node'}>
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
              character={this.props.character}
            />
            <Score score={score} />
          </div>
        </Fullscreen>
        <Button
          styles={{ position: 'absolute', bottom: '50px', right: '50px' }}
          variant="contained"
          color="primary"
          onClick={() => {
            this.setState({ isEnter: true });
          }}>
          <FullscreenIcon />
        </Button>
      </div>
    );
  }
}

Main.propTypes = {
  soundsVolume: PropTypes.number,
  character: PropTypes.string,
  speed: PropTypes.string,
  stats: PropTypes.array,
  userName: PropTypes.string,
};

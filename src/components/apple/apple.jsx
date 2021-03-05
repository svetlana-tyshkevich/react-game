import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './apple.css';
import appleImg from '../../assets/img/apple.png';
import mouseImg from '../../assets/img/mouse.png';
import groundImg from '../../assets/img/ground.png';

export default class Apple extends Component {
  render() {
    const { apple, character } = this.props;
    let mealSrc = '';
    switch (character) {
      case 'snake':
        mealSrc = mouseImg;
        break;
      case 'caterpillar':
        mealSrc = appleImg;
        break;
      case 'worm':
        mealSrc = groundImg;
        break;
      default:
    }

    return (
      <div
        className={'apple'}
        style={{
          left: `${apple.x}px`,
          top: `${apple.y}px`,
        }}>
        <img src={ mealSrc } alt={''} className={'appleImg'} />
      </div>
    );
  }
}

Apple.propTypes = {
  apple: PropTypes.object,
  character: PropTypes.string,
};

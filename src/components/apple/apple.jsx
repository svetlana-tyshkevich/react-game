import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './apple.css';
import appleImg from '../../assets/img/apple.png';

export default class Apple extends Component {
  render() {
    const { apple } = this.props;

    return (
      <div
        className={'apple'}
        style={{
          left: `${apple.x}px`,
          top: `${apple.y}px`,
          // backgroundImage: `url(${appleImg})`,
        }}>
        <img src={appleImg} alt={'apple'} className={'appleImg'} />
      </div>
    );
  }
}

Apple.propTypes = {
  apple: PropTypes.object,
};

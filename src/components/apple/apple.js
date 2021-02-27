import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './apple.css';

export default class Apple extends Component {
  render() {
    const { apple } = this.props;

    return (
      <div
        className={'apple'}
        style={{
          left: `${apple.x}px`,
          top: `${apple.y}px`,
        }}></div>
    );
  }
}

Apple.propTypes = {
  apple: PropTypes.array,
};

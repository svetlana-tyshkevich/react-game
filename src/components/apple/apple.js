import React, { Component } from 'react';
import './apple.css';

export default class Apple extends Component {
  render() {
    const { apple } = this.props;

    return (
      <div
        className={'apple'}
        style={{
          left: `${apple['x']}px`,
          top: `${apple['y']}px`,
        }}></div>
    );
  }
}

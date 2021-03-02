import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './apple.css';
// import appleImg from '../../assets/img/apple.png';
// import mouseImg from '../../assets/img/mouse.png';
import groundImg from '../../assets/img/ground.png';

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
        {/* <img src={appleImg} alt={'apple'} className={'appleImg'} /> */}
        {/* <img src={mouseImg} alt={'mouse'} className={'appleImg'} /> */}
        <img src={groundImg} alt={'ground'} className={'appleImg'} />
      </div>
    );
  }
}

Apple.propTypes = {
  apple: PropTypes.object,
};

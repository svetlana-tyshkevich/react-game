/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Statistics from '../components/Statistics.jsx';
import Settings from '../components/Settings.jsx';
import Help from '../components/Help.jsx';
import musicSrc from '../assets/sounds/common.mp3';

import './App.css';

export default class App extends Component {
  state = {
    userName: 'stranger',
    music: true,
    musicVolume: 0.3,
    sounds: true,
    soundsVolume: 1,
  };

  componentDidMount() {
    this.playMusic();
  }

  playMusic = () => {
    const myAudio = new Audio(musicSrc);
    myAudio.loop = true;
    myAudio.autoplay = true;
    myAudio.volume = this.state.musicVolume;
  };

  render() {
    const { userName, soundsVolume, musicVolume } = this.state;
    return (
      <div
        style={{
          backgroundColor: '#80b6f2',
        }}>
        <Router>
          <Header userName={userName} />

          <Route
            path="/"
            component={Main}
            musicVolume={musicVolume}
            soundsVolume={soundsVolume}
            exact
          />
          <Route path="/stats" component={Statistics} exact />
          <Route
            path="/sets"
            component={Settings}
            musicVolume={musicVolume}
            soundsVolume={soundsVolume}
            exact
          />
          <Route path="/help" component={Help} exact />
        </Router>
      </div>
    );
  }
}

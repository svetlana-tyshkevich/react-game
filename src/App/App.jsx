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
    musicVolume: 0.2,
    sounds: true,
    soundsVolume: 0.9,
  };

  componentDidMount() {
    this.playMusic();
  }

  componentDidUpdate(prevState) {
    if (this.state.musicVolume !== prevState.musicVolume) {
      this.musicAudio.pause();
      this.musicAudio.volume = this.state.musicVolume;
      this.musicAudio.play();
    }
  }

  playMusic = () => {
    this.musicAudio = new Audio(musicSrc);
    this.musicAudio.loop = true;
    this.musicAudio.autoplay = true;
    this.musicAudio.volume = this.state.musicVolume;
  };

  updateMusicVolume = (value) => {
    this.setState({ musicVolume: value });
  };

  updateSoundsVolume = (value) => {
    this.setState({ soundsVolume: value });
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
            render={() => (
              <Main
                soundsVolume={soundsVolume}
              />
            )}
            exact
          />
          <Route path="/stats" component={Statistics} exact />
          <Route
            path="/sets"
            render={() => (
              <Settings
                musicVolume={musicVolume}
                updateMusicVolume={this.updateMusicVolume}
                soundsVolume={soundsVolume}
                updateSoundsVolume={this.updateSoundsVolume}
              />
            )}
            exact
          />
          <Route path="/help" component={Help} exact />
        </Router>
      </div>
    );
  }
}

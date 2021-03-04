import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Statistics from '../components/Statistics.jsx';
import Settings from '../components/Settings.jsx';
import Help from '../components/Help.jsx';
import musicWest from '../assets/sounds/west.mp3';
import musicDrums from '../assets/sounds/drums.mp3';
import musicFort from '../assets/sounds/fort.mp3';

import './App.css';

export default class App extends Component {
  state = {
    userName: 'stranger',
    musicVolume: 0,
    soundsVolume: 0.9,
    character: 'caterpillar',
    speed: 'low',
    musicTheme: 'west',
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

    if (this.state.musicTheme !== prevState.musicTheme) {
      this.musicAudio.pause();
      this.playMusic();
    }
  }

  playMusic = () => {
    let musicSrc = '';
    switch (this.state.musicTheme) {
      case 'west':
        musicSrc = musicWest;
        break;
      case 'fort':
        musicSrc = musicFort;
        break;
      case 'drums':
        musicSrc = musicDrums;
        break;

      default:
    }
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

  updateCharacter = (value) => {
    this.setState({ character: value });
  };

  updateSpeed = (value) => {
    this.setState({ speed: value });
  };

  updateMusicTheme = (value) => {
    this.setState({ musicTheme: value });
  };

  render() {
    const {
      userName,
      soundsVolume,
      musicVolume,
      character,
      speed,
      musicTheme,
    } = this.state;
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
                character={character}
                speed={speed}
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
                updateCharacter={this.updateCharacter}
                character={character}
                updateSpeed={this.updateSpeed}
                speed={speed}
                musicTheme={musicTheme}
                updateMusicTheme={this.updateMusicTheme}
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

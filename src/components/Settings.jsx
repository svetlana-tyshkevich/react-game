import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  title: {
    flexGrow: 1,
    position: 'relative',
    marginTop: 20,
    textAlign: 'center',
  },

  setsBox: {
    display: 'flex',
    justifyContent: 'center',
    width: 400,
    minWidth: 400,
    padding: 20,
    flexWrap: 'wrap',
    margin: 30,
  },
  formBox: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
  },
};

class Settings extends Component {
  render() {
    const {
      classes,
      musicVolume,
      soundsVolume,
      updateMusicVolume,
      updateSoundsVolume,
    } = this.props;

    const musicVolumeChange = (event, newValue) => {
      updateMusicVolume(newValue / 100);
    };

    const soundsVolumeChange = (event, newValue) => {
      updateSoundsVolume(newValue / 100);
    };

    return (
      <div>
        <Typography variant="h3" className={classes.title}>
          Settings
        </Typography>

        <div className={classes.container}>
          <div>
            <Paper className={classes.setsBox}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Character</FormLabel>
                <RadioGroup
                  row
                  defaultValue="caterpillar"
                  className={classes.formBox}
                  aria-label="character"
                  name="character1"
                  //   value={value}
                  //   onChange={handleChange}
                >
                  <FormControlLabel
                    value="snake"
                    control={<Radio />}
                    label="Snake"
                  />
                  <FormControlLabel
                    value="caterpillar"
                    control={<Radio />}
                    label="Caterpillar"
                  />
                  <FormControlLabel
                    value="worm"
                    control={<Radio />}
                    label="Worm"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
            <Paper className={classes.setsBox}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Speed</FormLabel>
                <RadioGroup
                  row
                  defaultValue="low"
                  className={classes.formBox}
                  aria-label="speed"
                  name="speed1"
                  //   value={value}
                  //   onChange={handleChange}
                >
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Low"
                  />
                  <FormControlLabel
                    value="medium"
                    control={<Radio />}
                    label="Medium"
                  />
                  <FormControlLabel
                    value="high"
                    control={<Radio />}
                    label="High"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
            <Paper className={classes.setsBox}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Main Song</FormLabel>
                <RadioGroup
                  row
                  defaultValue="one"
                  className={classes.formBox}
                  aria-label="mainSong"
                  name="mainSong1"
                  //   value={value}
                  //   onChange={handleChange}
                >
                  <FormControlLabel
                    value="one"
                    control={<Radio />}
                    label="One"
                  />
                  <FormControlLabel
                    value="two"
                    control={<Radio />}
                    label="Two"
                  />
                  <FormControlLabel
                    value="three"
                    control={<Radio />}
                    label="Three"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          </div>
          <div>
            <Paper className={classes.setsBox}>
              <Typography id="musicVolume-slider" gutterBottom>
                Music Volume
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <VolumeDown />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={musicVolume * 100}
                    onChange={musicVolumeChange}
                    aria-labelledby="musicVolume-slider"
                  />
                </Grid>
                <Grid item>
                  <VolumeUp />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => updateMusicVolume(musicVolume === 0 ? 0.2 : 0)}>
                {musicVolume !== 0 ? <VolumeOffIcon /> : <VolumeUp />}
              </Button>
            </Paper>

            <Paper className={classes.setsBox}>
              <Typography id="soundsVolume-slider" gutterBottom>
                Sounds Volume
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <VolumeDown />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={soundsVolume * 100}
                    onChange={soundsVolumeChange}
                    aria-labelledby="soundsVolume-slider"
                  />
                </Grid>
                <Grid item>
                  <VolumeUp />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => updateSoundsVolume(soundsVolume === 0 ? 0.7 : 0)
                }>
                {soundsVolume !== 0 ? <VolumeOffIcon /> : <VolumeUp />}
              </Button>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  userName: PropTypes.string,
  classes: PropTypes.object,
  musicVolume: PropTypes.number,
  soundsVolume: PropTypes.number,
  updateMusicVolume: PropTypes.func,
  updateSoundsVolume: PropTypes.func,
  music: PropTypes.bool,
  sounds: PropTypes.bool,
  updateMusic: PropTypes.func,
  updateSounds: PropTypes.func,
};

export default withStyles(styles)(Settings);

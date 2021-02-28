import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    position: 'relative',
    marginLeft: 20,
  },
  text: {
    marginRight: 50,
    position: 'relative',
    fontSize: 20,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Snake Game
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Hello, Stranger!
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Your best score is 0
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  userName: PropTypes.array,
};

export default Header;

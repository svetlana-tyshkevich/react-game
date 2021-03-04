import React from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarsIcon from '@material-ui/icons/Stars';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import { Link } from 'react-router-dom';
import { gameTheme } from '../themes/theme.jsx';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={gameTheme}>
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}>
          Menu
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <Link to="/">
            <StyledMenuItem>
              <ListItemIcon>
                <EmojiFlagsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Game" />
            </StyledMenuItem>
          </Link>
          <Link to="/stats">
            <StyledMenuItem>
              <ListItemIcon>
                <StarsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Statistics" />
            </StyledMenuItem>
          </Link>
          <Link to="/sets">
            <StyledMenuItem>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </StyledMenuItem>
          </Link>
          <Link to="/help">
            <StyledMenuItem>
              <ListItemIcon>
                <HelpIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </StyledMenuItem>
          </Link>
        </StyledMenu>
      </div>
    </ThemeProvider>
  );
}

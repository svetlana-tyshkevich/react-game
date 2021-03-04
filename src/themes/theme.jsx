/* eslint-disable import/prefer-default-export */
import { createMuiTheme } from '@material-ui/core';

const gameTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#574c37',
    },
    secondary: {
      main: '#3c8359',
    },
    background: {
      default: '#74bddc',
      paper: '#d4deec',
    },
    text: {
      primary: '#5a3a2f',
    },
    info: {
      main: '#683ea2',
    },
  },
});

export { gameTheme };

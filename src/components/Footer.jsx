import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import Rss from '../assets/img/rs_school_js.svg';

const useStyles = makeStyles(() => ({
  footerRoot: {
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  footerItem: {
    display: 'inline-block',
  },
  imageIcon: {
    height: 30,
    width: 80,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerRoot}>
      <AppBar position="static">
        <Toolbar className={classes.footerLinks}>
          <Link
            href="https://github.com/svetlana-tyshkevich"
            variant="h6"
            className={classes.footerItem}
            color="inherit">
            Svetlana Tyshkevich
          </Link>
          <Link href="https://rs.school/js/" className={classes.footerItem}>
            <Icon className={classes.imageIcon}>
              <img src={Rss} />
            </Icon>
          </Link>
          <Typography className={classes.footerItem}>2021</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

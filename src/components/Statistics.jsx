/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    flexGrow: 1,
    position: 'relative',
    marginTop: 20,
    textAlign: 'center',
  },
  tableBox: {
    width: 400,
    margin: '30px auto',
  },
};

class Statistics extends Component {
  render() {
    const {
      classes,
      stats,
    } = this.props;
    const rows = stats.reverse().slice(0, 10);

    return (
      <div>
        <Typography variant="h3" className={classes.title}>
          Statistics
        </Typography>

        <TableContainer component={Paper} className={classes.tableBox}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {row.userName}
                  </TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

Statistics.propTypes = {
  classes: PropTypes.object,
  stats: PropTypes.array,
};

export default withStyles(styles)(Statistics);

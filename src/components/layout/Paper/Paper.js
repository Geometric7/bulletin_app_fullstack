import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
      height: '100vh',
      height: 'minContent',
      padding: '2rem 1rem',
    },
  },
}));

const Component = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>{children}</Paper>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as Paper, Component as PaperComponent };

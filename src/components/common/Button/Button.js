import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from './Button.module.scss';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Component = ({ children, color, action }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={action}
      variant='contained'
      color={color}
      sx={{ backgroundColor: color }}
    >
      {children}
    </Button>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  action: PropTypes.func,
};

export {
  Component as Button,
  Component as ButtonComponent,
};

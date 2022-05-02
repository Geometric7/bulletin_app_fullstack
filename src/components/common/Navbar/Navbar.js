import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getRole, loginRequest } from '../../../redux/sessionAuth';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Bookmark from '@material-ui/icons/Bookmark';

import styles from './Navbar.module.scss';

import { initialState } from '../../../redux/initialState';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary[800],
  },
  appBar: {
    backgroundColor: theme.palette.primary[800],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    color: theme.palette.primary[100],
    backgroundColor: theme.palette.primary[800],
  },
  logo: {
    textDecoration: 'none',
    color: theme.palette.primary[100],
  },
}));

const Component = ({ role, loginStatus, login }) => {
  const classes = useStyles();
  const handleLogin = () => {
    login();
  };
  return (
    <AppBar position='static' className={classes.appBar}>
      <Container maxWidth='lg'>
        <Toolbar className={classes.toolbar}>
          <a href='/' className={classes.logo}>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <Bookmark />
            </IconButton>
          </a>
          <Typography variant='h6' className={clsx(classes.title, styles.navTitle)}>
            Bulletin Board
          </Typography>
          {!loginStatus && (
            <Button color='inherit' action={handleLogin}>
             Login
            </Button>
          )}
          {loginStatus && ( <>
            <Button color='inherit'>Account</Button>{' '}
            <Button color='inherit'>Logout</Button>
          </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Component.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
  role: PropTypes.oneOf(['admin', 'user']),
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
  role: getRole(state),
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginRequest()),
});



const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export { ContainerComponent as Navbar, Component as NavbarComponent };

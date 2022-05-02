import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import {
  getLoginStatus,
  getRole,
  getUserData,
  loginRequest,
} from '../../../redux/sessionAuth';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Bookmark from '@material-ui/icons/Bookmark';
import { Button } from '../Button/Button';

import styles from './Navbar.module.scss';

import { initialState } from '../../../redux/initialState';
import { addFilter } from '../../../redux/postsRedux';

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

const Component = ({ role, authorId, loginStatus, login, addFilter }) => {
  const classes = useStyles();
  const handleLogin = () => {
    login();
  };
  const filterOffers = () => {
   addFilter({ author: { _id: authorId } });
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
          {loginStatus && (
            <>
              <Button action={filterOffers}>My Posts</Button>
              <Button>Logout</Button>
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
  authorId: getUserData(state).id,
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginRequest()),
  addFilter: filter => dispatch(addFilter(filter)),
});



const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export { ContainerComponent as Navbar, Component as NavbarComponent };

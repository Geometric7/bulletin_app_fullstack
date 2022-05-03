/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './PageNav.module.scss';
import { updateLoginStatus } from '../../../redux/loginRedux';
import { updateUserStatus } from '../../../redux/userRedux';
import { connect } from 'react-redux';


const Component = ({className, isLogged, updateLoginStatus, updateUserStatus}) => (
  <div className={clsx(className, styles.root)}>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
    {isLogged && <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/posts`} activeClassName='active'>My Ads</Button>}
    {isLogged
      ? <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/`} activeClassName='active' onClick={() => {
        updateLoginStatus('logout');
        updateUserStatus(false);
      }}
      >
        Log Out</Button>
      : <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Log In</Button>
    }
  </div>
);

Component.propTypes = {
  isLogged: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  updateLoginStatus: PropTypes.func,
  updateUserStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
  updateUserStatus: log => dispatch(updateUserStatus(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PageNav,
  Container as PageNav,
  Component as PageNavComponent,
};

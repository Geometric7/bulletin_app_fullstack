/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { getLoginState } from '../../../redux/loginRedux';
import { getAllPosts } from '../../../redux/postsRedux';
import { getCurrentUser } from '../../../redux/userRedux';

import { Login } from '../Login/Login';
import { Cards } from '../../layout/Cards/Cards';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import clsx from 'clsx';
import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './MyAds.module.scss';

const Component = ({ isLogged, posts, currentUser }) => {

  const { isAdmin, email } = currentUser;
  if (isLogged) {
    return (
      <Container className={styles.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((post) => {
            if (post.author === email) {
              return (<Grid item key={post.id} xs={12} sm={6} md={4}>
                <Cards post={post} />
              </Grid>);
            } else if (isAdmin) {
              return (<Grid item key={post.id} xs={12} sm={6} md={4}>
                <Cards post={post} />
              </Grid>);
            } else {
              return null;
            }
          })}
        </Grid>
      </Container>
    );
  } else {
    return <Login />;
  }
};

Component.propTypes = {
  isLogged: PropTypes.bool,
  posts: PropTypes.array,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
  posts: getAllPosts(state),
  currentUser: getCurrentUser(state),
});

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  ReduxContainer as MyAds,
  Component as MyAdsComponent,
};

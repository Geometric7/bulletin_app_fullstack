import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { getAll, fetchPostsRequest, getIsLoading } from '../../../redux/postsRedux';

import { Post } from '../../views/Post/Post';

//import styles from './AllPosts.module.scss';

import { Spinner } from '../../common/Spinner/Spinner';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
}));

const Component = props => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  const classes = useStyles();
  return (
    <div className={clsx(classes.root)}>
      {props.isLoading && <Spinner />}
      {!props.isLoading && (
        <Grid container spacing={3}>
          {props.posts.map(post => (
            <Grid
              key={post._id}
              className={classes.item}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Post data={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as AllPosts, Component as AllPostsComponent };

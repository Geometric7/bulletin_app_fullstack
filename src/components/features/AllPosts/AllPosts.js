import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { getAll, fetchPostsRequest, getIsLoading } from '../../../redux/postsRedux';

import { Post } from '../../views/Post/Post';

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

const Component = ({ posts, isLoading, fetchPosts, onlyMyAds }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const classes = useStyles();
  return (
    <div className={clsx(classes.root)}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Grid container spacing={3}>
          {posts.map(post => (
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
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchPosts: PropTypes.func,
  onlyMyAds: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  posts: getAll(state, ownProps.onlyMyAds),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as AllPosts, Component as AllPostsComponent };

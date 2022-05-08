/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '../../common/Card/Card';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { getAllPosts, fetchPublished } from '../../../redux/postsRedux';
//import clsx from 'clsx';
import styles from './Cards.module.scss';

class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;
    fetchPublishedPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <Container className={styles.cardGrid} maxWidth="md">
         <Grid container spacing={4}>
           {posts.map((post) => (
             <Grid item key={post.id} xs={12} sm={6} md={4}>
               <Card post={post} />
             </Grid>
           ))}
         </Grid>
       </Container>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});


const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Cards,
  ReduxContainer as Cards,
  Component as CardsComponent,
};

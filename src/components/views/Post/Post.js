/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { connect } from 'react-redux';
import { getCurrentPost, fetchPostDetails } from '../../../redux/postsRedux';
import { getLoginState } from '../../../redux/loginRedux';
import { getCurrentUser } from '../../../redux/userRedux';
import { Link } from 'react-router-dom';
import styles from './Post.module.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Component extends React.Component {

  componentDidMount() {
    const { fetchPost } = this.props;
    fetchPost();
  }

  render() {
    const { post, isLogged, currentUser } = this.props;
    const { image, title, text, created, changed, status, location, price, _id, phone, author } = post;
    const { isAdmin, email } = currentUser;
    const isPostAuthor = author === email ? true : false;

    return (
      <Container className={styles.cardGrid} maxWidth="md">
        <Grid item>
          <Card className={styles.card}>
            <CardMedia
              className={styles.cardMedia}
              image={image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
            />
            <CardContent className={styles.cardContent}>
              <Typography className={styles.cardInfo}>
                {`${location} - ${created}`}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2" className={styles.cardTitle}>
                {title}
              </Typography>
              <Typography className={styles.cardPrice}>
                {`Price: ${price}`}
              </Typography>
              <Typography className={styles.cardDesc}>
                {text}
              </Typography>
              <Typography className={styles.cardAuthor}>
                {`Seller: ${author}`}
              </Typography>
              <Typography className={styles.cardPhone}>
                {`Phone: ${phone}`}
              </Typography>
              {(isLogged && (isPostAuthor || isAdmin)) && (<Typography>
                {`Status: ${status}`}
              </Typography>)}
            </CardContent>
            <CardActions className={styles.cardActions}>
              {(isLogged && (isPostAuthor || isAdmin)) && (<Button component={Link} size="medium" color="primary" variant="contained" to={`${process.env.PUBLIC_URL}/post/${_id}/edit`}>
                 Edit
              </Button>)}
              <Button size="medium" color="primary" variant="contained" href={`mailto:${author}`}>
               Email to seller
              </Button>
              <Typography className={styles.publicationDate}>
                {`Edited: ${changed}`}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  post: PropTypes.object,
  isLogged: PropTypes.bool,
  currentUser: PropTypes.object,
  fetchPost: PropTypes.func,
};

const mapStateToProps = state => ({
  post: getCurrentPost(state),
  isLogged: getLoginState(state),
  currentUser: getCurrentUser(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPost: () => dispatch(fetchPostDetails(props.match.params._id)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ReduxContainer as Post,
  Component as PostComponent,
};

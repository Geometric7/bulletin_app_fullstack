/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import clsx from 'clsx';
import styles from './Cards.module.scss';

const Component = ({className, posts}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Container className={styles.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map(({ title, image, imageTitle, location, id, publicationDate, price }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <Link underline='none' href={`${process.env.PUBLIC_URL}/post/${id}`}>
                <Card className={styles.card}>
                  <CardMedia
                    className={styles.cardMedia}
                    image={image}
                    title={imageTitle}
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography className={styles.cardInfo}>
                      {`${location} - ${publicationDate}`}
                    </Typography>
                    <Typography className={styles.cardPrice}>
                      {`Price: ${price}$`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/*<Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>*/}
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});


// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  //Component as Cards,
  ReduxContainer as Cards,
  Component as CardsComponent,
};

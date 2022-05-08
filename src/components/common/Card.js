/* eslint-disable linebreak-style */
import React from 'react';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import styles from './Card.module.scss';

const Component = ({post}) => {


  const { title, image, location, _id, created, price } = post;

  return (

    <Link underline='none' href={`${process.env.PUBLIC_URL}/post/${_id}`} className={styles.link}>
      <Card className={styles.card}>
        <CardMedia
          className={styles.cardMedia}
          image={image || 'https://www.obrienprinting.com/wp-content/uploads/2013/09/logo-icon.png'}
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={styles.cardInfo}>
            {`${location} - ${created}`}
          </Typography>
          <Typography className={styles.cardPrice}>
            {`Price: ${price}$`}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

Component.propTypes = {
  post: PropTypes.object,
};

export {
  Component as Card,
  Component as CardComponent,
};

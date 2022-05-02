import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';


import MoreVertIcon from '@material-ui/icons/MoreVert';

import { deletePostRequest, getPostById } from '../../../redux/postsRedux';

import styles from './OnePost.module.scss';
import { getUserData } from '../../../redux/sessionAuth';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    width: '60%',
    marginTop: '3rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Component = ({ data, deletePost, user }) => {
  const history = useHistory();
  const classes = useStyles();
  const handleDelete = () => {
    deletePost(data._id);
    history.push('/');
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              {data.author.name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={data.title}
          subheader={new Date(parseInt(data.publishedDate)).toISOString().slice(0, 10)}
        />
        <CardMedia
          className={classes.media}
          image={`http://localhost:8000/${data.photo}`}
          title='Add Photo'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.summary}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          {user.id === data.author._id && (
            <IconButton aria-label='delete' onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          )}
        </CardActions>

        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{data.content}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

Component.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    summary: PropTypes.string.isRequired,
    publishedDate: PropTypes.string,
    updatedDate: PropTypes.string,
    author: PropTypes.object,
    photo: PropTypes.string,
    price: PropTypes.number,
    phone: PropTypes.string,
    location: PropTypes.string,
  }),
  user: PropTypes.object,
  deletePost: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  data: getPostById(state, ownProps.match.params.id),
  user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  deletePost: _id => dispatch(deletePostRequest(_id)),
});

const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export { ContainerComponent as OnePost, Component as OnePostComponent };

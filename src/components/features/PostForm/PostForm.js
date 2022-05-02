import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { connect, useSelector } from 'react-redux';
import { addPostFormSchema } from '../../../schemas/addPostSchema';
import {
  createPostRequest,
  updatePostRequest,
  getPostById,
} from '../../../redux/postsRedux';
import styles from './PostForm.module.scss';
import { getUserData } from '../../../redux/sessionAuth';

const useStyles = makeStyles({
  container: {
    width: '70%',
  },
  root: {
    '& .MuiTextField-root': {
      width: '100%',
      margin: '1rem auto',
    },
  },
  media: {
    height: 140,
  },
  entry: {},
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
    backgroundColor: '#1565c0',
    color: 'white',
    marginTop: '1rem',
  },
  imagePicker: {
    display: 'none',
  },
  imageContainer: {
    height: '40%',
    width: '100%',
  },
  image: {
    height: '100%',
    maxWidth: '100%',
  },
  errorMessage: {
    color: 'red',
  },
});

const Component = ({ formType, formTitle, authorId, createPost, updatePost, ...props }) => {
  const { id } = useParams();
  const defaultPost = {
    title: '',
    price: '',
    location: '',
    summary: '',
    content: '',
  };
  const post = useSelector(state => getPostById(state, id)) || defaultPost;
  console.log(post);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(addPostFormSchema) });
  const classes = useStyles();
  const imagePickerRef = useRef();
  const onSubmitHandler = (data, e) => {
    e.preventDefault();
    reset();
    if (formType === 'createPost') {
    createPost({ ...data, author: authorId, status: 'published' });
  } else if (formType === 'editPost') {
    updatePost({ ...data, id, author: authorId, status: 'published' });
  }
    history.push('/');
  };
  const pickImage = e => {
    imagePickerRef.current.click();
  };
  const fields = [
   { label: 'Author:', name: 'author', defaultValue: props.author || '' },
   { label: 'Email:', name: 'email', defaultValue: props.email || '' },
   { label: 'Title:', name: 'title', defaultValue: post.title || '' },
   { label: 'Price:', name: 'price', defaultValue: post.price || '' },
   { label: 'Location:', name: 'location', defaultValue: post.location || '' },
   { label: 'Summary:', name: 'summary', defaultValue: post.summary || '' },
   { label: 'Content:', name: 'content', defaultValue: post.content || '' },
 ];
 const generateTextField = ({ label, defaultValue, name }) => (
   <div key={name} className={classes.entry}>
     <TextField
       id='outlined-disabled'
       label={label}
       variant='outlined'
       defaultValue={defaultValue}
       {...register(name)}
     />
     <small className={errors[name] ? classes.errorMessage : ''}>
       {errors[name]?.message}
     </small>
   </div>
 );
  return (
    <Container className={classes.container}>
      <div className={clsx(styles.root)}>
        <h2>{formTitle}</h2>
        <form
          className={classes.root}
          autoComplete='off'
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className={classes.image}>
            <input ref={imagePickerRef} type='file' className={classes.imagePicker} />
            <div className={classes.imageContainer}>
              <img
                src={`${process.env.PUBLIC_URL}/images/AddImage.jpeg`}
                alt='image'
                className={classes.image}
              />
            </div>
            <Button onClick={pickImage} className={classes.button}>
              Pick image
            </Button>
          </div>
          {fields.map(field => generateTextField(field))}
          <div className={classes.buttons}>
            <Button type='submit' color='primary' className={classes.button}>
              {formTitle}
            </Button>
            {formType === 'createPost' && (
              <Button type='submit' color='secondary' className={classes.button}>
                Save to draft
              </Button>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
};

Component.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  authorId: getUserData(state).id,
  author: getUserData(state).name,
  email: getUserData(state).email,
});
const mapDispatchToProps = dispatch => ({
  createPost: postData => dispatch(createPostRequest(postData)),
  updatePost: postData => dispatch(updatePostRequest(postData)),
});

const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export { ContainerComponent as PostForm, Component as PostFormComponent };

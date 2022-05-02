import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { addPostFormSchema } from '../../../schemas/addPostSchema';
import styles from './AddPostForm.module.scss';

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

const Component = ({ className, children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(addPostFormSchema) });
  const classes = useStyles();
  const imagePickerRef = useRef();
  const onSubmitHandler = data => {
    console.log(data);
    reset();
    console.log('submitted');
  };
  const pickImage = e => {
    imagePickerRef.current.click();
  };
  return (
    <Container className={classes.container}>
      <div className={clsx(className, styles.root)}>
        <h2>Add new advestisement </h2>
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
          <div className={classes.entry}>
            <TextField
              disabled
              id='outlined-disabled'
              label='Author:'
              variant='outlined'
              value='Your name'
            />
          </div>
          <div className={classes.entry}>
            <TextField
              disabled
              id='outlined-disabled'
              label='Email:'
              defaultValue='Your e-mail'
              variant='outlined'
              {...register('email')}
            />
          </div>

          <div className={classes.entry}>
            <TextField
              required
              id='outlined-required'
              label='Title:'
              defaultValue='Add Title'
              variant='outlined'
              {...register('title')}
            />
            <small className={errors.title ? classes.errorMessage : ''}>
              {errors.title?.message}
            </small>
          </div>
          <div className={classes.entry}>
            <TextField
              required
              id='outlined-required'
              label='Price:'
              variant='outlined'
              {...register('price')}
            />
            <small className={errors.price ? classes.errorMessage : ''}>
              {errors.price?.message}
            </small>
          </div>
          <div className={classes.entry}>
            <TextField
              required
              id='outlined-required'
              label='Location:'
              defaultValue='Your location'
              variant='outlined'
            />
          </div>
          <div className={classes.entry}>
            <TextField
              id='outlined-multiline-static'
              label='Summary:'
              multiline
              minRows={2}
              defaultValue='Add summary here'
              variant='outlined'
              {...register('summary')}
            />
            <small className={errors.summary ? classes.errorMessage : ''}>
              {errors.summary?.message}
            </small>
          </div>
          <div className={classes.entry}>
            <TextField
              id='outlined-multiline-static'
              label='Description:'
              multiline
              minRows={6}
              defaultValue='Add description here'
              variant='outlined'
              {...register('content')}
            />
            <small className={errors.content ? classes.errorMessage : ''}>
              {errors.content?.message}
            </small>
          </div>
          <Button type='submit' color='primary' className={classes.button}>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as AddPostForm,
  Component as AddPostFormComponent,
};

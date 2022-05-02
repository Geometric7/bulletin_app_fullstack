import React, { useRef, useState, useEffect } from 'react';
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
import { getUserData } from '../../../redux/sessionAuth';
import styles from './PostForm.module.scss';

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
  const [file, setFile] = useState(undefined);
  const [previewUrl, setPreviewUrl] = useState(undefined);
  const [button, setButton] = useState(1);
  useEffect(() => {
    if (!file) {
      return;
    }
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  const defaultPost = {
    title: '',
    price: '',
    location: '',
    summary: '',
    content: '',
  };
  const post = useSelector(state => getPostById(state, id)) || defaultPost;
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
    const formData = new FormData();
    for (let key in data) {
      formData.append(`${key}`, data[key]);
    }
    formData.append('author', authorId);
    formData.append('status', 'published');
    formData.append('photo', file);
    console.log('formData', formData);

    if (formType === 'createPost' && button === 1) {
      formData.append('status', 'published');
      createPost(formData);
    } else if (formType === 'createPost' && button === 2) {
      formData.append('status', 'draft');
      createPost(formData);
  } else if (formType === 'editPost') {
    updatePost({ ...data, id, author: authorId, status: 'published' });
  }
    history.push('/');
  };
  const pickImage = e => {
    imagePickerRef.current.click();
  };
  const imageHandler = event => {
  if (event.target.files && event.target.files.length !== 0) {
    const pickedFile = event.target.files[0];
    setFile(pickedFile);
    return;
  }
};

  const fields = [
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
          <input
             ref={imagePickerRef}
             onChange={imageHandler}
             type='file'
             accept='.jpg,.jpeg,.png'
             className={classes.imagePicker}
           />
            <div className={classes.imageContainer}>
            {post.photo ? (
             <img
               src={
                 previewUrl ||
                 `http://localhost:8000/${post.photo}` ||
                 `http://localhost:8000/public/images/AddImage.jpeg`
               }
               alt='image'
               className={classes.image}
             />
           ) : (
             <img
               src={previewUrl || `http://localhost:8000/public/images/AddImage.jpeg`}
               alt='image'
               className={classes.image}
             />
           )}
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
              <Button
               type='submit'
               color='secondary'
               className={classes.button}
               onClick={() => {
                 setButton(2);
               }}
             >
                Save to draft
              </Button>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
};

Component.propTypes = {
  formType: PropTypes.string.isRequired,
  formTitle: PropTypes.string,
  authorId: PropTypes.string,
  createPost: PropTypes.func,
  updatePost: PropTypes.func,
};

const mapStateToProps = state => ({
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

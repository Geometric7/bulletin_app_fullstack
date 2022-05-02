import React from 'react';
//import PropTypes from 'prop-types';

import { PostForm } from '../../features/PostForm/PostForm';

const Component = () => <PostForm formTitle='Publish ad' formType='createPost' />;

//Component.propTypes = {};

export {
  Component as PostAdd,
  Component as PostAddComponent,
};

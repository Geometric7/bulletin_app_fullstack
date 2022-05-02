import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { PostForm } from '../../features/PostForm/PostForm';
import styles from './PostAdd.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <PostForm formTitle='Publish ad' formType='createPost' />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as PostAdd,
  Component as PostAddComponent,
};

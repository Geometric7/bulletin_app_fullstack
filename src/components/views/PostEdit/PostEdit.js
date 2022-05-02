import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { PostForm } from '../../features/PostForm/PostForm';
import { getPostById } from '../../../redux/postsRedux';

import { connect } from 'react-redux';
import styles from './PostEdit.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <PostForm formTitle='Update Post' formType='editPost' />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({});

const Container = connect(mapStateToProps)(Component);

export { Container as PostEdit, Component as PostEditComponent };

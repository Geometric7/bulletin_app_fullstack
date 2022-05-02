import React from 'react';
//import PropTypes from 'prop-types';

import { PostForm } from '../../features/PostForm/PostForm';

import { connect } from 'react-redux';

const Component = () => <PostForm formTitle='Update Post' formType='editPost' />;
//Component.propTypes = {};

const mapStateToProps = (state, ownProps) => ({});

const Container = connect(mapStateToProps)(Component);

export { Container as PostEdit, Component as PostEditComponent };

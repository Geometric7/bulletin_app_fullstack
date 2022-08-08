/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './NotFound.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h1>404 Page not found</h1>
    <div className={styles.btn}>
      <a href={`${process.env.PUBLIC_URL}/`} > Back to Homepage</a>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};

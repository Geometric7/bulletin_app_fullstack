import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';


import styles from './NotFound.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>404 Not Found</h2>
    {children}
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

import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import styles from './Footer.module.scss';

const Component = ({className, children}) => (
  <footer className={clsx(className, styles.root)}>
    <Typography variant="h6" align="center" gutterBottom>
      Make your own Ad right now
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Local Ads
    </Typography>
  </footer>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};

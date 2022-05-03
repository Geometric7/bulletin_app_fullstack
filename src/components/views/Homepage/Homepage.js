/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Head} from '../../layout/Head/Head';
import { Cards } from '../../layout/Cards/Cards';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Head />
    <Cards />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent,
};

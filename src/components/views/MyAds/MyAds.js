import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus } from '../../../redux/sessionAuth';
import { AllPosts } from '../../features/AllPosts/AllPosts';
import styles from './MyAds.module.scss';

const Component = ({ loginStatus }) => (
  <div className={clsx(styles.root)}>
    <div className={styles.pageHeading}>
      <h2 className={styles.pageTitle}>My Posts</h2>
    </div>
    {loginStatus && <AllPosts onlyMyAds={true} />}
  </div>
);

Component.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export { Container as MyAds, Component as MyAdsComponent };

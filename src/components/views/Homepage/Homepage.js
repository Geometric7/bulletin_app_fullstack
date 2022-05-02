import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus } from '../../../redux/sessionAuth';

import { AllPosts } from '../../features/AllPosts/AllPosts';
import styles from './Homepage.module.scss';

const Component = ({ loginStatus }) => (
  <div className={clsx(styles.root)}>
    <div className={styles.pageHeading}>
      <h2 className={styles.pageTitle}>All current advertisements</h2>
      {loginStatus && (
        <Link to='/post/add' className={styles.button}>
          ADD ADVERTISEMENT
        </Link>
      )}
    </div>
    <AllPosts />
  </div>
);

Component.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export { Container as Homepage, Component as HomepageComponent };

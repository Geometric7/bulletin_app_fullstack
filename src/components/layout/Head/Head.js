/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { getLoginState } from '../../../redux/loginRedux';
import { connect } from 'react-redux';

import styles from './Head.module.scss';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Component = ({ className, children, isLogged }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Bulletin board
        </Typography>
        <div>
          <Grid container spacing={2} justifyContent="center">
           <Grid item>
            {isLogged && <Button component={Link} className={styles.heroButtons} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/post/add`}>
                Add new Ad
              </Button>}
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  //Component as Head,
  ReduxContainer as Head,
  Component as HeadComponent,
};

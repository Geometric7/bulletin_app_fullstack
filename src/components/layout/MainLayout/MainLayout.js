import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import { Header } from '../Header/Header';
import { Paper } from '../Paper/Paper';

const Component = ({ children }) => (
  <div>
    <Header />
    <Container maxWidth='lg'>
      <Paper>
        <Container maxWidth='lg'>{children}</Container>
      </Paper>
    </Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as MainLayout, Component as MainLayoutComponent };

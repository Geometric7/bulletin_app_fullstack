import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from '../../common/Navbar/Navbar';

const Component = () => <Navbar />;

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Header, Component as HeaderComponent };

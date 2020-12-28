import React, { Component } from 'react';
import propTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      return <h1>Something went wrong, please try again later :(</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node.isRequired,
};

export default ErrorBoundary;

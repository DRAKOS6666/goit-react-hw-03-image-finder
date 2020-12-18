import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    state = {
        isError: false,
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

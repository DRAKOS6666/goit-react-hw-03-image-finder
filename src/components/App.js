import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    query: '',
  };

  setQuery = text => {
    this.setState({ query: text });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <ErrorBoundary>
          <Searchbar onSubmit={this.setQuery} />
          {query && <ImageGallery query={query} />}
        </ErrorBoundary>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

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
        <Searchbar onSubmit={this.setQuery} />
        {query && <ImageGallery query={query} />}
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };

  state = { searchText: '' };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchText === '') {
      toast.error('Please enter search query!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.searchText}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

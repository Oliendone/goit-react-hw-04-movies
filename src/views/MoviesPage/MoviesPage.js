import React, { Component } from 'react';

import moviesAPI from '../../utilities/moviesAPI';

export default class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevState = this.prevState;
    const presentState = this.state.searchQuery;
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInputQuery = e => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={searchQuery}
              onChange={this.handleInputQuery}
            ></input>
          </label>
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

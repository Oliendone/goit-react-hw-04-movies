import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { searchQuery: '' };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
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

import React, { Component } from 'react';
import s from './SearchBar.module.css';

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
        <form onSubmit={this.handleSubmit} className={s.searchForm}>
          <label>
            <input
              type="text"
              value={searchQuery}
              onChange={this.handleInputQuery}
              className={s.formInput}
            ></input>
          </label>
          <button type="submit" className={s.buttonSearch}>Search</button>
        </form>
      </>
    );
  }
}

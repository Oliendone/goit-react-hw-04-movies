import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/SearchBar/SearchBar';

import moviesAPI from '../../utilities/moviesAPI';
import getQueryParams from '../../utilities/getQueryParams';

export default class MoviesPage extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      moviesAPI.moviesSearch(query).then(movies => this.setState({ movies }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevParams } = getQueryParams(prevProps.location.search);
    const { query: nextParams } = getQueryParams(this.props.location.search);

    if (prevParams !== nextParams) {
      moviesAPI
        .moviesSearch(nextParams)
        .then(movies => this.setState({ movies }));
    }
  }

  handleChangeQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />
        {movies && (
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link
                  to={{ pathname: `/movies/${id}`, state: location.pathname }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

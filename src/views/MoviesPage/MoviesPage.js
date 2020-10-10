import React, { Component } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import MovieItem from '../../components/MovieItem/MovieItem';

import moviesAPI from '../../utilities/moviesAPI';
import getQueryParams from '../../utilities/getQueryParams';

export default class MoviesPage extends Component {
  static defaultProps = {
    imgURL: 'https://image.tmdb.org/t/p/w500',
  };

  state = {
    movies: null,
    loading: false,
    error: null,
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
        .then(movies => this.setState({ movies }))
        .catch(error => {
          this.setState({ error: error.message });
          console.log(error);
        })
        .finally(() =>
          this.setState({
            loading: false,
          }),
        );
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
    const { location, imgURL } = this.props;
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleChangeQuery} />
        {movies && (
          <MovieItem movies={movies} location={location} imgURL={imgURL} />
        )}
      </div>
    );
  }
}

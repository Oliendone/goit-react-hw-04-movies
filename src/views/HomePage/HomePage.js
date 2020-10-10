import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import MovieItem from '../../components/MovieItem/MovieItem';

import moviesAPI from '../../utilities/moviesAPI';
import s from '../styles.module.css';

export default class HomePage extends Component {
  static defaultProps = {
    imgURL: 'https://image.tmdb.org/t/p/w500',
  };

  state = {
    movies: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    await moviesAPI
      .trendingMovies()
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

  render() {
    const { movies, loading } = this.state;
    const { location, imgURL } = this.props;

    return (
      <div className="container">
        <h2 className={s.heading}>Trending today</h2>
        {loading && (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={80}
            width={80}
            className="Loader"
          />
        )}
        {movies && (
          <MovieItem movies={movies} location={location} imgURL={imgURL} />
        )}
      </div>
    );
  }
}

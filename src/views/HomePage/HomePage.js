import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moviesAPI from '../../utilities/moviesAPI';

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    moviesAPI
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
    const { movies } = this.state;
    const { location } = this.props;

    return (
      <div>
        <h2>Trending today</h2>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

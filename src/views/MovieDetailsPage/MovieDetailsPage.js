import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

import moviesAPI from '../../utilities/moviesAPI';

export default class MovieDetailsPage extends Component {
  static defaultProps = {
    imgURL: 'https://image.tmdb.org/t/p/w500',
  };

  state = {
    loading: false,
    movie: null,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    moviesAPI
      .particularMovie(this.props.match.params.movieId)
      .then(movie => {
        this.setState({ movie });
      })
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
    const { movie } = this.state;
    const { imgURL, match } = this.props;

    // .split('-').slice(0, 1)
    return (
      <div>
        {this.state.movie && (
          <>
            <img
              src={`${imgURL}${movie.poster_path}`}
              alt={movie.original_title}
              width="200"
            />
            <div>
              <h2>
                {movie.original_title} (
                {movie.release_date.split('-').slice(0, 1)})
              </h2>
              <p>User score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              {movie.genres.map(genre => (
                <span>{genre.name} </span>
              ))}
            </div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`${match.url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${match.url}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <Route
              path={`${match.path}/cast`}
              render={props => <Cast {...props} imgURL={imgURL} />}
            />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </>
        )}
      </div>
    );
  }
}

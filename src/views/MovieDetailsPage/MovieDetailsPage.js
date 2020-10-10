import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import MovieItemInfo from '../../components/MovieItemInfo/MovieItemInfo';
import BackButton from '../../components/BackButton/BackButton';
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';

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

  async componentDidMount() {
    this.setState({ loading: true });

    await moviesAPI
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

  onGoBack = () => {
    const { state } = this.props.location;
    console.log(state);

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push('/');
  };

  render() {
    const { movie, loading } = this.state;
    const { imgURL, match } = this.props;

    return (
      <div className="container">
        {loading && (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={80}
            width={80}
            className="Loader"
          />
        )}
        {movie && (
          <>
            <BackButton onGoBack={this.onGoBack} />
            <MovieItemInfo movie={movie} imgURL={imgURL} />
            <AdditionalInfo match={match} imgURL={imgURL} />
          </>
        )}
      </div>
    );
  }
}

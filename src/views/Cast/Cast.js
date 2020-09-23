import React, { Component } from 'react';

import moviesAPI from '../../utilities/moviesAPI';

export default class Cast extends Component {
  state = {
    cast: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    moviesAPI
      .movieCast(this.props.match.params.movieId)
      .then(cast => {
        this.setState({ cast });
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
    const { cast } = this.state;
    const { imgURL } = this.props;

    console.log(this.state.cast);

    return (
      <>
        {cast && (
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `${imgURL}${actor.profile_path}`
                      : 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'
                  }
                  alt={actor.name}
                  width="50"
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
            ;
          </ul>
        )}
      </>
    );
  }
}

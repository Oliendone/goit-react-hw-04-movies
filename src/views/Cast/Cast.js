import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import moviesAPI from '../../utilities/moviesAPI';
import s from './Cast.module.css';

export default class Cast extends Component {
  state = {
    cast: null,
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    await moviesAPI
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
    const { cast, loading } = this.state;
    const { imgURL } = this.props;

    return (
      <>
        {loading && (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={80}
            width={80}
            className="Loader"
          />
        )}
        {cast && (
          <ul className={s.castList}>
            {cast.map(actor => (
              <li key={actor.id} className={s.actorItem}>
                <img
                  src={
                    actor.profile_path
                      ? `${imgURL}${actor.profile_path}`
                      : 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'
                  }
                  alt={actor.name}
                  width="100"
                />
                <p className={s.actorName}>{actor.name}</p>
                <p className={s.actorCharacter}>Character</p>
                <span>{actor.character}</span>
              </li>
            ))}
            ;
          </ul>
        )}
      </>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';

import s from './MovieItemInfo.module.css';

export default function MovieItemInfo({ movie, imgURL }) {
  return (
    <>
      <h2 className={s.heading}>
        {movie.original_title} ({movie.release_date.split('-').slice(0, 1)})
      </h2>
      <div className={s.wrapperFilm}>
        <img
          className={s.filmImg}
          src={`${imgURL}${movie.poster_path}`}
          alt={movie.original_title}
          width="200"
        />

        <div className={s.infoWrapper}>
          <h3 className={s.overview}>Overview</h3>
          <p>{movie.overview}</p>
          <h3 className={s.genresHeader}>Genres</h3>
          <ul className={s.infoGenres}>
            {movie.genres.map(genre => (
              <li key={genre.id} className={s.genresItem}>
                {genre.name}
              </li>
            ))}
          </ul>
          <h3 className={s.userScore}>User score:</h3>
          <span>{movie.vote_average * 10}%</span>
        </div>
      </div>
    </>
  );
}

MovieItemInfo.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
    ]),
  ).isRequired,
  imgURL: PropTypes.string.isRequired,
};

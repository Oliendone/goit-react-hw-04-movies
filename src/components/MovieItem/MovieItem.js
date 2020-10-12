import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MovieItem.module.css';

export default function MovieItem({ movies, location, imgURL }) {
  return (
    <ul className={s.filmList}>
      {movies.map(({ title, id, poster_path }) => (
        <li className={s.filmItem} key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
            className={s.name}
          >
            <img
              src={`${imgURL}${poster_path}`}
              alt={title}
              width="220"
              className={s.filmImg}
            />
            <p className={s.filmName}>{title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

MovieItem.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.bool,
      ]),
    ),
  ).isRequired,
  imgURL: PropTypes.string.isRequired,
  location: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
    ]),
  ).isRequired,
};

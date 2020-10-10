import React from 'react';
import { NavLink } from 'react-router-dom';

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

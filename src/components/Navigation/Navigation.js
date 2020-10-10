import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <ul className={s.header}>
      <li>
        <NavLink exact to="/" className={s.link}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/movies" className={s.link}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
}

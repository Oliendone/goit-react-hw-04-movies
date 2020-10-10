import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomePage from '../views/HomePage/HomePage';
import MovieDetailsPage from '../views/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from '../views/MoviesPage/MoviesPage';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function App() {
  return (
    <div className="main-wrapper">
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

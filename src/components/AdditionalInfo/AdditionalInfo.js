import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Cast from '../../views/Cast/Cast';
import Reviews from '../../views/Reviews/Reviews';

import s from './AdditionalInfo.module.css';

export default function AdditionalInfo({ match, imgURL }) {
  return (
    <div>
      <p className={s.additionalInfo}>Additional information</p>
      <ul className={s.infoCategories}>
        <li key="1" className={s.infoItem}>
          <NavLink to={`${match.url}/cast`} className={s.link}>
            Cast
          </NavLink>
        </li>
        <li key="2" className={s.infoItem}>
          <NavLink to={`${match.url}/reviews`} className={s.link}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Route
        path={`${match.path}/cast`}
        render={props => <Cast {...props} imgURL={imgURL} />}
      />
      <Route path={`${match.path}/reviews`} component={Reviews} />
    </div>
  );
}

AdditionalInfo.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object]),
  ).isRequired,
  imgURL: PropTypes.string.isRequired,
};

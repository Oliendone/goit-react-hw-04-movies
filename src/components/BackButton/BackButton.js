import React from 'react';
import PropTypes from 'prop-types';

import s from './BackButton.module.css';

export default function BackButton({ onGoBack }) {
  return (
    <button onClick={onGoBack} className={s.backButton}>
      Back
    </button>
  );
}

BackButton.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

import React from 'react';

import s from './BackButton.module.css';

export default function BackButton({ onGoBack }) {
  return (
    <button onClick={onGoBack} className={s.backButton}>
      Back
    </button>
  );
}

// src/CarSpeed.js
import React from 'react';
import PropTypes from 'prop-types';
import './CarSpeed.css';

const CarSpeed = ({ carName, speed }) => {
  const isHighSpeed = speed > 100;

  return (
    <div className="car-speed-container">
      <h2>{carName}</h2>
      <div className={`circle ${isHighSpeed ? 'high-speed' : 'normal-speed'}`}>
        <p className={`speed-text ${isHighSpeed ? 'high-speed-text' : 'normal-speed-text'}`}>
          {speed} km/h
        </p>
      </div>
    </div>
  );
};

CarSpeed.propTypes = {
  carName: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default CarSpeed;

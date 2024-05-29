// src/ToggleSwitch.js
import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <>
      <span className="car-number yellow">1</span>
      <div className="toggle-switch">
        <input
          checked={isOn}
          onChange={handleToggle}
          className="toggle-input"
          type="checkbox"
          id="toggle-switch"
        />
        <label className="toggle-slider" htmlFor="toggle-switch" />
      </div> 
      <span class="car-number blue">2</span>
      </>
  );
};

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ToggleSwitch;

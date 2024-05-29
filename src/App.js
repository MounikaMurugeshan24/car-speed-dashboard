// src/App.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import CarSpeed from './components/CarSpeed';
import ToggleSwitch from './components/ToggleSwitch';
import './App.css';

const App = () => {
  const [isCar1, setIsCar1] = useState(true);

  const handleToggle = () => {
    setIsCar1(!isCar1);
  };

  const carColor = isCar1 ? '#0082c7' : '#f9c931';

  return (
    <div className="App">
      <h1>Car Speed Dashboard</h1>
      <div className="car-icon" style={{ color: carColor }}>
        <FontAwesomeIcon icon={faCar} size="3x" />
      </div>
      <ToggleSwitch isOn={isCar1} handleToggle={handleToggle} />
      <div className="dashboard">
        {isCar1 ? (
          <CarSpeed carName="Car 1" speed={60} />
        ) : (
          <CarSpeed carName="Car 2" speed={120} />
        )}
      </div>
      Current speed
      <div class="bottom-bar" style={{ background: carColor }}></div>
    </div>
  );
};

export default App;

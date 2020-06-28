import React from 'react';
import './AppContainer.css';
import FoodAdder from './FoodAdder';

function AppContainer() {
  return (
      <div className="container">
        <p>Energy Consumed:</p>
        <FoodAdder />
      </div>
  );
}
  
export default AppContainer;
// Greeting.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Greeting.css'; // Import your CSS file for styling

export const Greeting = () => {
  const location = useLocation();
  const { name, type } = location.state;

  return (
    <div className='greeting-container'>
      <div className='greeting-content'>
        {type === "Sign Up" ? (
          <h1>Hello {name}, thank you for signing up!</h1>
        ) : (
          <h1>Welcome back {name}!</h1>
        )}
      </div>
    </div>
  );
};

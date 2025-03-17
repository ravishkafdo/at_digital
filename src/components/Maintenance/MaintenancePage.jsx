import React, { useEffect, useState } from 'react';
import './MaintenancePage.css';

const MaintenancePage = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressWidth(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(timer);
        return 100;
      });
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <div className="tools-animation">
          <div className="gear gear-left"></div>
          <div className="gear gear-right"></div>
          <div className="wrench"></div>
        </div>
        
        <h1>We're Making Things Better</h1>
        
        <p className="message">
          Our website is currently undergoing scheduled maintenance to improve your experience.
          We'll be back online shortly with new features and improvements.
        </p>
        
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
          <p className="progress-text">Estimated completion: {progressWidth}%</p>
        </div>
        
        <div className="contact-info">
          <p>Need immediate assistance?</p>
          <button className="contact-button">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
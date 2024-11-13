import React from 'react';
import './Offers.css'; // Ensure this points to your CSS file

const Offers = () => {
  return (
    <div className="offers-page">
      <h1>Exclusive Offers</h1>
      <div className="offer-list">
        <div className="offer-item">
          <h3>Save 20% on Weekends</h3>
          <p>Travel during weekends and get 20% off on your ticket.</p>
          <button>Learn More</button>
        </div>
        <div className="offer-item">
          <h3>Group Discounts</h3>
          <p>Book for 4 or more people and get additional discounts!</p>
          <button>Learn More</button>
        </div>
        <div className="offer-item">
          <h3>Early Bird Special</h3>
          <p>Book your tickets at least 30 days in advance and receive a 15% discount.</p>
          <button>Learn More</button>
        </div>
        <div className="offer-item">
          <h3>Family Package</h3>
          <p>Enjoy a special rate when booking for the whole family.</p>
          <button>Learn More</button>
        </div>
        {/* Add more offers as needed */}
      </div>
    </div>
  );
};

export default Offers;

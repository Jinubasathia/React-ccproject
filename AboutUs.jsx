import React from 'react';
import './AboutUs.css'; // Ensure this points to your CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        We are a leading provider of train ticket booking services, dedicated to making travel easier and more accessible for everyone. Our platform allows users to book tickets seamlessly, find the best deals, and manage their travel plans effortlessly.
      </p>
      <h2 className="about-us-subtitle">Our Mission</h2>
      <p className="about-us-description">
        Our mission is to simplify the travel experience by providing an intuitive and user-friendly platform that connects travelers with the best train options available.
      </p>
      <h2 className="about-us-subtitle">Our Vision</h2>
      <p className="about-us-description">
        We envision a world where travel is not just a journey but an enriching experience. We strive to enhance the way people travel by offering innovative solutions and exceptional customer service.
      </p>
      <h2 className="about-us-subtitle">Our Values</h2>
      <ul className="about-us-values">
        <li>Customer-Centric: We prioritize our customers' needs and feedback.</li>
        <li>Integrity: We conduct our business with transparency and honesty.</li>
        <li>Innovation: We embrace change and strive for continuous improvement.</li>
        <li>Accessibility: We aim to make travel accessible for everyone.</li>
      </ul>
      <h2 className="about-us-subtitle">Our History</h2>
      <p className="about-us-description">
        Founded in 2020, we began with a simple idea: to revolutionize the train booking experience. Since then, we have grown into a trusted platform used by thousands of travelers each month, constantly adapting to meet the evolving needs of our users.
      </p>
      <h2 className="about-us-subtitle">Join Us on Our Journey</h2>
      <p className="about-us-description">
        We invite you to join us as we continue to explore new horizons in travel and ticket booking. Together, let's make every journey unforgettable!
      </p>
    </div>
  );
};

export default AboutUs;

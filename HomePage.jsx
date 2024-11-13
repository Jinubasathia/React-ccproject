import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  // State variables for form inputs
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  const handleSearch = () => {
    if (from && to && date) {
      // Navigate to Available Trains page with search parameters
      navigate('/available-trains', { state: { from, to, date } });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <h1>Train Ticket Booking</h1>
        <div className="nav-links">
          <button onClick={() => navigate('/about-us')}>About Us</button>
          <button onClick={() => navigate('/offers')}>Offers</button>
          {!isLoggedIn ? (
            <>
              <button onClick={() => navigate('/login')}>Login</button>
              <button onClick={() => navigate('/signup')}>Sign Up</button>
              <button onClick={() => navigate('/login')}>Logout</button>
            </>
          ) : (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </nav>
<br/><br/><br/><br/><br/><br/><br/>
      <main className="main-content">
        <section className="booking-section">
          <h2>Book Your Train Ticket</h2>
          <form className="booking-form">
            <div>
              <label htmlFor="from">From:&nbsp;</label>
              <input 
                type="text" 
                id="from" 
                placeholder="Departure City" 
                className="small-input" 
                value={from} 
                onChange={(e) => setFrom(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="to">To:&nbsp;</label>
              <input 
                type="text" 
                id="to" 
                placeholder="Destination City" 
                className="small-input" 
                value={to} 
                onChange={(e) => setTo(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="date">Date:&nbsp;</label>
              <input 
                type="date" 
                id="date" 
                className="small-input" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
              />
            </div>
          </form>
          <button type="button" onClick={handleSearch} className="search-button">
            Search Trains
          </button>
        </section>
      </main>
      <br /><br /><br /><br/><br/> <br/><br/><br /><br/><br /><br/><br/><br/>
      <footer className="footer">
        <div className="footer-social">
          <span>Social Media:</span>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://thumbs.dreamstime.com/b/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution-255557233.jpg"
              alt="Facebook"
            />
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGWFvs8Qvk6MzFRoFSdhkk_rRQOvIKvP9cQ&s"
              alt="Twitter"
            />
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBFXCirT08g-Mqzt1m6oD1Z6Dw4Oc9XqwDw&s"
              alt="Instagram"
            />
            Instagram
          </a>
        </div>
        <div className="privacy-policy">
          <a href="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

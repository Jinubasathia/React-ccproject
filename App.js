// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';   // Import Provider from react-redux
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import store from './store';              // Import the Redux store
import AboutUs from './AboutUs';
import Offers from './Offers';
import AvailableTrains from './AvailableTrains';

const App = () => {
  return (
    <Provider store={store}>              {/* Wrap the app with the Redux Provider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/available-trains" element={<AvailableTrains />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

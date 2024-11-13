import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    // On successful signup
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pPVQ-IU2ZunSwypaSEF8TgmjSM8670hCRw&s" alt="Signup" />
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input 
                type="password" 
                id="confirm-password" 
                name="confirm-password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="already-account">
            <p>Already have an account? <span onClick={() => navigate('/login')} className="link">Login here</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  // Fetch users from the JSON server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials match any user in the fetched data
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // On successful login
      navigate('/');
    } else {
      // Handle invalid login
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
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
          <div className="input-group remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="create-account">
          <p>Don't have an account? <span onClick={() => navigate('/signup')} className="link">Create an account</span></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './LoginForm.module.css'; // If you have custom CSS

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to track sign-in or sign-up page

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., sending credentials to server for validation
    if (username === 'example' && password === 'password') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container">
      {loggedIn ? (
        <Typography variant="h2" gutterBottom>Welcome, {username}!</Typography>
      ) : (
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Button onClick={handleToggleMode} fullWidth>
            {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;

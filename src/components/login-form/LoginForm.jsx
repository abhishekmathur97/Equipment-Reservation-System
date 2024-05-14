import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../../utils/api';
import { userActions } from '../../store/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const isAuthorized = useSelector(state => state.user.isAuthorized);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      // with backend
      // isSignUp ?
      //   signup(email, password).then(res => {
      //     dispatch(userActions.authorize());
      //     localStorage.setItem('token', res.token);
      //     navigate('/');
      //   }) :
      //   login(email, password).then(res => {
      //     dispatch(userActions.authorize());
      //     localStorage.setItem('token', res.token);
      //     navigate('/');
      //   });
      // for testing without backend
      localStorage.setItem('token', 'test');
      dispatch(userActions.authorize(email));
      dispatch(userActions.setCurrentUser(email));
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="form__container">
      {isAuthorized ? (
        <Navigate to='/' replace />
      ) : (
        <form onSubmit={handleLogin} className='column'>
          <input
            label="Username"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Email'
            required
          />
          <input
            label="Password"
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          <a onClick={handleToggleMode}>
            {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
          </a>
        </form>
      )}
    </div>
  );
};

export default LoginForm;

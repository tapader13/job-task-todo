import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/tasks/authSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      dispatch(login(email));
      setEmail('');
      setPassword('');
    }
  };
  return (
    <div className='w-full lg:w-1/2 mx-auto mt-10'>
      {' '}
      <div className='text-center'>
        <h2 className='text-xl mb-4'>Login to Your To-Do App</h2>
        <input
          type='email'
          className='p-2 border rounded text-gray-700 bg-gray-300 mb-2 w-full'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='p-2 border rounded text-gray-700 bg-gray-300 mb-2 w-full'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='bg-gray-700 cursor-pointer text-white px-4 py-2 rounded w-full'
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

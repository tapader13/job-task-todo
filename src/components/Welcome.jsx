import React from 'react';

const Welcome = ({ user, handleLogout }) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <h1 className='text-2xl'>Welcome, {user.split('@')[0]}!</h1>
      <button
        className='bg-red-500 cursor-pointer px-3 py-1 rounded'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Welcome;

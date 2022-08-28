import React from 'react';
import HomePage from '../HomePage';
import './userDetails.css';

const UserDetails = () => {
  const handleLogout = () => {
    localStorage.removeItem ('name');
    localStorage.removeItem ('email');
    window.location.reload ('/');
  };

  return (
    <div>
      <HomePage />
      <div className="userwrap">
        <h1 className="heading">Welcome!! You logged In</h1>
        <h1 className="user-name">{localStorage.getItem ('name')}</h1>
        <h1 className="user-email">{localStorage.getItem ('email')}</h1>

        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

    </div>
  );
};

export default UserDetails;

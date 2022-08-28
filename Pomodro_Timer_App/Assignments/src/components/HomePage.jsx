import {Link} from 'react-router-dom';
import React from 'react';

const HomePage = () => {
  return (
    <div className='navbar'>
      <ul >
        <li><Link to='/login'>Login-with-Google</Link></li>
        <li><Link to='/pomodoro'>Pomodoro-app</Link></li>
        <li><Link to='/userGithub'>Users Github</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;

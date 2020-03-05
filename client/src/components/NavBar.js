import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/spacex'>Launch Videos</Link>
          </li>
          <li>
            <Link to='/data'>Mission Data</Link>
          </li>
          <li>
            <Link to='/upcoming'>Upcoming Launches</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

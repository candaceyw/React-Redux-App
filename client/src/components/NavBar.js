import React, { useRef, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const NavBar = () => {
  useEffect(() => {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    });

    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <nav style={{ marginBottom: '30px' }} className='blue'>
        <div className='nav-wrapper'>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
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

      <ul className='sidenav' id='mobile-demo'>
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
    </Fragment>
  );
};

export default NavBar;

import React, { useEffect } from 'react';
import { nextLaunch } from '../store/actions/spacexActions';

const moment = require('moment');

const Countdown = props => {
  useEffect(() => {
    nextLaunch();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1> Upcoming Launch: </h1>
      <h1 className='time'>
        {moment(props.launch_date_utc).format('MMMM Do YYYY, h:mm:ss a')}
      </h1>
    </div>
  );
};

export default Countdown;

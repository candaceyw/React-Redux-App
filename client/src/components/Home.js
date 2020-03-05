import React from 'react';
import Countdown from './Countdown';
import Count from './Count';

const Home = () => {
  return (
    <div>
      {/* <Countdown /> */}
      <Count
        timeTillDate='03 06 2020, 11:50 pm'
        timeFormat='MM DD YYYY, h:mm p'
      />

      {/*  Date of launch from Next Launch data: "launch_date_local": "2020-03-06T23:50:00-05:00", */}
    </div>
  );
};

export default Home;

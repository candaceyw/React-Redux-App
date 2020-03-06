import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Countdown from './Countdown';
import Count from './Count';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

import { nextLaunch } from '../store/actions/spacexActions';

const Home = ({ date, isFetching, nextLaunch, error }) => {

    useEffect(() => {
      nextLaunch();
      //eslint-disable-next-line
    }, []);
  
    if (isFetching || date === null) {
      return <h2>{error}</h2>;
    }
      return (
    <div>
     

 {console.log("what is date", date)}
      {/* <h1>{date.launch_date_local}</h1> */}
      {/* <Countdown /> */}
     
      <Count
        timeTillDate={date.launch_date_local}
         timeFormat='YYY MM DD, hh:mm p'
        // timeTillDate='03 06 2020, 23:50 pm'
        // timeFormat='MM DD YYYY, h:mm p'
      />

      {/*  Date of launch from Next Launch data: "launch_date_local": "2020-03-06T23:50:00-05:00", */}
    </div>
  );
};


Home.propTypes = {
  date: PropTypes.object.isRequired,
  nextLaunch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    date: state.date,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { nextLaunch })(Home);

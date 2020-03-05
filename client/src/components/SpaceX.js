import React from 'react';
import { connect } from 'react-redux';
import SpacexCard from './SpacexCard';
import  Logo from '../assests/spacex-logo.png'
import 'materialize-css/dist/css/materialize.min.css';

import { getLaunch } from '../store/actions/spacexActions';

const SpaceX = ({ getLaunch, launch, isFetching, error }) => {
  // console.log("test launch", launch)
  if (isFetching) {
    return <h2>Fetching new Launch now:</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (launch === '') {
    return (
      <div className='home'>
       
        {/* <h1>SpaceX Launch Missions</h1> */}
        <div className='logo'><img src={Logo} /></div>
        <a className='modal-close waves-effect blue waves-light btn-large'  onClick={getLaunch}>Get Launches</a> 


      </div>
    );
  }

  return (
    <div>
      <div className='cardWrapper'>
        {launch.map((item, idx) => (
          <SpacexCard
            key={idx}
            mission_name={item.mission_name}
            launch_year={item.launch_year}
            rocket={item.rocket.rocket_name}
            details={item.details}
            src={
              item.links.video_link === null
                ? ''
                : item.links.video_link.replace('watch?v=', 'embed/')
            }
          />
        ))}
      </div>
    
    </div>
  );
};

const mapStateToProps = state => {
  return {
    launch: state.launch,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getLaunch })(SpaceX);

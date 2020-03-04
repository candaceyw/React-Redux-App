import React from 'react';
import { connect } from 'react-redux';
import SpacexCard from './SpacexCard';

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
      <div className="home">
     <h1>SpaceX Launch Missions</h1>

    <button onClick={getLaunch}>Get new Launch</button>

    <input type="text" placeholder="Filter by Year"></input>

    </div>
    )}

  return (
    <div>
      
      <div className="cardWrapper">
    <iframe src={launch[0].links.video_link.replace("watch?v=", "embed/")} /> 

        <h1>SpaceX Launches</h1>
        {launch.map(item => (
          
         <SpacexCard 
            mission_name={item.mission_name}
            launch_year={item.launch_year}
            rocket={item.rocket.rocket_name}
            details={item.details}
           src={item.links.video_link.replace("watch?v=", "embed/")}

            // video={item.links.video_link.replace("watch?v=", "embed/")}
        />
        
        ))}
      </div>
        {/* <h1>{launch[0].mission_name}</h1> */}
         {/* <p>{launch[0].launch_year}</p>
         <iframe src={launch[0].links.video_link.replace("watch?v=", "embed/")} /> */}
        <button onClick={getLaunch}>Get new Launch</button>
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

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SpacexCard from './SpacexCard';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

import { getLaunch } from '../store/actions/spacexActions';

const SpaceX = ({ launch, isFetching, getLaunch, error }) => {
  useEffect(() => {
    getLaunch();
    //eslint-disable-next-line
  }, []);

  if (isFetching || launch === null) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <div className='cardWrapper'>
        {!isFetching && launch.length === 0 ? (
          <p className='center'>No launches to show... </p>
        ) : (
          launch.map((item, idx) => (
            <SpacexCard
              key={idx}
              launch={launch}
              mission_name={item.mission_name}
              launch_year={item.launch_year}
              rocket={item.rocket.rocket_name}
              details={item.details}
              success={item.launch_success}
              src={
                item.links.video_link === null
                  ? ''
                  : item.links.video_link.replace('watch?v=', 'embed/')
              }
            />
           
          ))
        )}
       
       </div>
    </div>
  );
};

SpaceX.propTypes = {
  launches: PropTypes.object.isRequired,
  getLaunch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    launch: state.launch,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getLaunch })(SpaceX);

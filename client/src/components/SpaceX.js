import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getLaunch } from '../store/actions/spacexActions';

const SpaceX = ({ getLaunch, launch, isFetching, error }) => {
  if (isFetching) {
    return <h2>Fetching new Launch now :)</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>SpaceX Mission: {launch}</h1>
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

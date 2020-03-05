import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const SpacexCard = props => {
  return (
    <div className='row'>
      <div className='col s12 m6'>
        <div className='card'>
          <div className='card-image'>
            <iframe src={props.src} />
          </div>
          <div className='card-content'>
            <span className='card-title'>{props.mission_name}</span>

            <p>Year of Launch: {props.launch_year}</p>
            <p>Rocket Name: {props.rocket}</p>
            <p>Success/Failure: {props.success}</p>
            <p>Details of Launch: {props.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacexCard;

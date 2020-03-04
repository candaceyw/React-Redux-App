import React from 'react';
import { getLaunch } from '../store/actions/spacexActions';
import { connect } from 'react-redux';


const SpacexCard = (props) => {
    return (

        <div className="card">
             <div className='video'>
             <iframe src={props.video} /> 
             </div>
            <h1>{props.mission_name}</h1>
            <p>{props.launch_year}</p>
            <p>{props.rocket}</p>
            <p>{props.details}</p>
           
           
        </div>
    )
}

export default SpacexCard

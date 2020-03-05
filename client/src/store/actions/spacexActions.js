import axios from 'axios';

export const FETCHING_LAUNCH_START = 'FETCHING_LAUNCH_START';
export const FETCHING_LAUNCH_SUCCESS = 'FETCHING_LAUNCH_SUCCESS';
export const FETCHING_LAUNCH_FAILURE = 'FETCHING_LAUNCH_FAILURE';
export const SEARCH_LAUNCH = 'SEARCH_LAUNCH';
export const LAUNCH_DATA = 'LAUNCH_DATA';

// Get All Launches data
export const getLaunch = () => dispatch => {
  dispatch({ type: FETCHING_LAUNCH_START });

  axios
    .get('https://api.spacexdata.com/v3/launches?limit=20')
    .then(res => {
      console.log('res', res.data);

      dispatch({
        type: FETCHING_LAUNCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('err', err);

      dispatch({
        type: FETCHING_LAUNCH_FAILURE,
        payload: err
      });
    });
};

// Get Next Launch data
export const nextLaunch = text => async dispatch => {
  // dispatch({ type: FETCHING_LAUNCH_START });

  axios
    .get(`https://api.spacexdata.com/v3/launches/next`)
    .then(res => {
      console.log('res', res.data);

      dispatch({
        type: SEARCH_LAUNCH,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('err', err);

      dispatch({
        type: FETCHING_LAUNCH_FAILURE,
        payload: err
      });
    });
};

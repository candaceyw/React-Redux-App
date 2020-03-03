import axios from 'axios';

export const FETCHING_LAUNCH_START = 'FETCHING_LAUNCH_START';
export const FETCHING_LAUNCH_SUCCESS = 'FETCHING_LAUNCH_SUCCESS';
export const FETCHING_LAUNCH_FAILURE = 'FETCHING_LAUNCH_FAILURE';

export const getLaunch = () => dispatch => {
  // initially send the action FETCHING_QUOTE_START so that we
  // get our state updated to support a fetch
  dispatch({ type: FETCHING_LAUNCH_START });

  axios
    .get('https://api.spacexdata.com/v3/launches/latest')
    .then(res => {
      console.log('res', res.data);
      // send the action FETCHING_QUOTE_SUCCESS and update state
      // to show the fetched data
      dispatch({
        type: FETCHING_LAUNCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('err', err);
      // send the action FETCHING_QUOTE_FAILURE and update state
      // to show the error message
      dispatch({
        type: FETCHING_LAUNCH_FAILURE,
        payload: `${err.response.message} with response code ${err.response.code}`
      });
    });
};

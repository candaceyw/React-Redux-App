import {
  FETCHING_LAUNCH_START,
  FETCHING_LAUNCH_SUCCESS
} from '../actions/spacexActions';

const initialState = {
  launch: {},
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LAUNCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCHING_LAUNCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        launch: action.payload
      };
    default:
      return state;
  }
};

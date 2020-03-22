import {
  FETCHING_LAUNCH_START,
  FETCHING_LAUNCH_SUCCESS,
  NEXT_LAUNCH_START,
  NEXT_LAUNCH_SUCCESS

} from '../actions/spacexActions';

const initialState = {
  launch: '',
  date: '',
  isFetching: false,
  error: ''
};

export default (state = initialState, action) => {
  console.log('reducer', action);
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
    case NEXT_LAUNCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
      case NEXT_LAUNCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          date: action.payload
        };
    default:
      return state;
  }
};

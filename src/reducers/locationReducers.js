import {
  LOCATION_REQUEST,
  LOCATION_SUCCESS,
  LOCATION_FAIL,
} from "../constants/locationConstants";

function locationReducer(state = {}, action) {
  switch (action.type) {
    case LOCATION_REQUEST:
      return { loading: true };
    case LOCATION_SUCCESS:
      return { loading: false, addressinfo: action.payload };
    case LOCATION_FAIL:
      return { loading: false, addresserror: action.payload };
    default:
      return state;
  }
}

export { locationReducer };

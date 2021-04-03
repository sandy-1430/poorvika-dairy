import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOGOUT,
  USER_OTP_REQUEST,
  USER_OTP_SUCCESS,
  USER_OTP_FAIL,
} from "../constants/userConstants";

function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}
function otpVerifyReducer(state = {}, action) {
  switch (action.type) {
    case USER_OTP_REQUEST:
      return { loading: true };
    case USER_OTP_SUCCESS:
      return { loading: false, userdata: action.payload };
    case USER_OTP_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export { userSigninReducer, otpVerifyReducer };

import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOGOUT,
  USER_OTP_REQUEST,
  USER_OTP_SUCCESS,
  USER_OTP_FAIL,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
} from "../constants/userConstants";

function userSignupReducer(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, registerinfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

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

function otpRequestReducer(state = {}, action) {
  switch (action.type) {
    case USER_OTP_REQUEST:
      return { loading: true };
    case USER_OTP_SUCCESS:
      return { loading: false, otp: action.payload };
    case USER_OTP_FAIL:
      return { loading: false, requesterror: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

function otpVerifyReducer(state = {}, action) {
  switch (action.type) {
    case VERIFY_OTP_REQUEST:
      return { loading: true };
    case VERIFY_OTP_SUCCESS:
      return { loading: false, userdata: action.payload };
    case VERIFY_OTP_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
}

export {
  userSigninReducer,
  otpRequestReducer,
  userSignupReducer,
  otpVerifyReducer,
};

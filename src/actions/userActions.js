import Axios from "axios";
import Cookie from "js-cookie";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_OTP_REQUEST,
  USER_OTP_SUCCESS,
  USER_OTP_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

const register = (name, pass, phone, email) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: {} });
  try {
    const { data } = await Axios.post(
      "https://demo3.gyso.in/index.php?route=feed/rest_api/signup1",
      {
        mobileno: phone,
        username: name,
        email: email,
        password: pass,
      }
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set("registerinfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};

const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username } });
  try {
    const {
      data,
    } = await Axios.put(
      "https://demo3.gyso.in/index.php?route=feed/rest_api/signin",
      { userdata: username, password: password }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    // localStorage.setItem("userInfo", JSON.stringify(data));
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const otpverify = (username, otp) => async (dispatch) => {
  dispatch({ type: USER_OTP_REQUEST, payload: {} });
  try {
    const {
      data,
    } = await Axios.post(
      "https://demo3.gyso.in/index.php?route=feed/rest_api/signin",
      { userdata: username, otp: otp }
    );
    dispatch({ type: USER_OTP_SUCCESS, payload: data });
    // localStorage.setItem("userInfo", JSON.stringify(data));
    Cookie.set("userdata", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_OTP_FAIL, payload: error.message });
  }
};

const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};
// const product =
export { register, signin, logout, otpverify };

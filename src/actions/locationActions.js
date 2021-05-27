import Axios from "axios";
import Cookie from "js-cookie";
import {
  LOCATION_REQUEST,
  LOCATION_SUCCESS,
  LOCATION_FAIL,
} from "../constants/locationConstants";

const locationinfo = (address) => async (dispatch) => {
  dispatch({ type: LOCATION_REQUEST, payload: {} });
  try {
    let response = "";
    let pincode = "";
    await Axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        address +
        "&key=AIzaSyD2c9W470cpyc2o2ku4CzRkRCuM1V5WW4w"
    ).then((res) => {
      response = res;
    });
    response.data.results[0].address_components.map((code) =>
      code.types == "postal_code" ? (pincode = code.long_name) : ""
    );
    dispatch({
      type: LOCATION_SUCCESS,
      payload: {
        address: response.data.results[1].formatted_address,
        pincode: pincode,
      },
    });
  } catch (error) {
    dispatch({ type: LOCATION_FAIL, payload: error.message });
  }
};

// const product =
export { locationinfo };

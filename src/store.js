import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  userSigninReducer,
  otpRequestReducer,
  userSignupReducer,
  otpVerifyReducer,
} from "./reducers/userReducers";
import {
  productlistReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cardItemsReducer } from "./reducers/cartReducers";
import { locationReducer } from "./reducers/locationReducers";

const userInfo = Cookie.getJSON("userInfo") || null;
const registerinfo = Cookie.getJSON("registerinfo") || null;
const productdetail = Cookie.getJSON("productdetail") || null;

const initialState = {
  userSignin: { userInfo },
  productDetails: { productdetail },
  registerDetail: { registerinfo },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  registerDetail: userSignupReducer,
  Requestotp: otpRequestReducer,
  userData: otpVerifyReducer,
  productList: productlistReducer,
  productDetails: productDetailsReducer,
  cart: cardItemsReducer,
  locationInfo: locationReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

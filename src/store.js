import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  userSigninReducer,
  otpVerifyReducer,
  userSignupReducer,
} from "./reducers/userReducers";
import {
  productlistReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cardItemsReducer } from "./reducers/cartReducers";

const userInfo = Cookie.getJSON("userInfo") || null;
const userdata = Cookie.getJSON("userdata") || null;
const registerinfo = Cookie.getJSON("registerinfo") || null;
const productdetail = Cookie.getJSON("productdetail") || null;

const initialState = {
  userSignin: { userInfo },
  productDetails: { productdetail },
  userData: { userdata },
  registerDetail: { registerinfo },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  registerDetail: userSignupReducer,
  userData: otpVerifyReducer,
  productList: productlistReducer,
  productDetails: productDetailsReducer,
  cart: cardItemsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

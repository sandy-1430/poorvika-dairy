import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  userSigninReducer,
  otpVerifyReducer,
  userSignupReducer,
} from "./reducers/userReducers";
import { cardItemsReducer } from "./reducers/cartReducers";
import {
  productlistReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

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
  cart: cardItemsReducer,
  productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

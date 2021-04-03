import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { userSigninReducer, otpVerifyReducer } from "./reducers/userReducers";
import { cardItemsReducer } from "./reducers/cartReducers";
import {
  productlistReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const userInfo = Cookie.getJSON("userInfo") || null;
const userdata = Cookie.getJSON("userdata") || null;
const cartitems = Cookie.getJSON("cartitems") || [];
const productdetail = Cookie.getJSON("productdetail") || null;

const initialState = {
  userSignin: { userInfo },
  productDetails: { productdetail },
  userData: { userdata },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userData: otpVerifyReducer,
  productList: productlistReducer,
  cartitems: cardItemsReducer,
  productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

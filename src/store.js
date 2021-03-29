import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { userSigninReducer } from "./reducers/userReducers";
import {
  productlistReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  userSignin: { userInfo },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  productList: productlistReducer,
  productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

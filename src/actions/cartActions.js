import { ADD_TO_CART } from "../constants/cartConstants";
import Cookie from "js-cookie";
import Axios from "axios";

const addToCart = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(
      "https://fakestoreapi.com/products/" + productId
    );
    dispatch({
      type: ADD_TO_CART,
      payload: { data },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};

export { addToCart };

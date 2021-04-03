import { ADD_TO_CART } from "../constants/cartConstants";
import Cookie from "js-cookie";
import axios from "axios";

const addToCart = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/" + productId
    );
    dispatch({ type: ADD_TO_CART, payload: data });
    Cookie.set("cartitems", JSON.stringify(data));
  } catch (error) {}
};

export { addToCart };

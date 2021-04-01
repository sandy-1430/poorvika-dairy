import { CART_ADD_ITEM } from "../constants/cartConstants";
import Cookie from "js-cookie";
import Axios from "axios";

const addToCart = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(
      "https://fakestoreapi.com/products/" + productId
    );
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};

export { addToCart };

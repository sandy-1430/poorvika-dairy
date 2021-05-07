import { ADD_TO_CART } from "../constants/cartConstants";

const addToCart = (product) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  } catch (error) {}
};

export { addToCart };

import {
  ADD_TO_CART,
  CART_REMOVE_ITEM,
  ADD_Qty,
  SUB_Qty,
} from "../constants/cartConstants";

const addToCart = (product) => async (dispatch) => {
  console.log(product);
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  } catch (error) {}
};

const RemoveFromCart = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
  } catch (error) {}
};

const IncreaseQty = (product) => async (dispatch) => {
  console.log(product);
  try {
    dispatch({
      type: ADD_Qty,
      payload: product,
    });
  } catch (error) {}
};

const DecreaseQty = (product) => async (dispatch) => {
  console.log(product);
  try {
    dispatch({
      type: SUB_Qty,
      payload: product,
    });
  } catch (error) {}
};

export { addToCart, IncreaseQty, DecreaseQty, RemoveFromCart };

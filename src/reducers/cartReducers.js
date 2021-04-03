import { ADD_TO_CART } from "../constants/cartConstants";

function cardItemsReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartitems: action.payload };
    default:
      return state;
  }
}

export { cardItemsReducer };

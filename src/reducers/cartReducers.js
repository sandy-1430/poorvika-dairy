import { ADD_TO_CART } from "../constants/cartConstants";

const initialState = {
  cartitems: [],
};

function cardItemsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const product = state.cartitems.find((x) => x.id === item.id);
      if (product) {
        return {
          cartitems: state.cartitems.map((x) =>
            x.id === product.id ? item : x
          ),
        };
      }
      return { cartitems: [...state.cartitems, item] };
    default:
      return state;
  }
}

export { cardItemsReducer };

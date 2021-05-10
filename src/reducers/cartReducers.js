import {
  ADD_TO_CART,
  CART_REMOVE_ITEM,
  ADD_Qty,
  SUB_Qty,
} from "../constants/cartConstants";

const initialState = {
  cartitems: [],
};

function cardItemsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      if (item !== undefined) {
        return { cartitems: [...state.cartitems, item] };
      } else {
        return { cartitems: [...state.cartitems] };
      }

    case CART_REMOVE_ITEM:
      console.log(action.payload);
      return {
        cartitems: state.cartitems.filter((x) => x.id !== action.payload),
      };

    case ADD_Qty:
      console.log(action.payload);
      return {
        ...state,
        cartitems: state.cartitems.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: action.payload.qty }
            : product
        ),
      };

    case SUB_Qty:
      console.log(action.payload);
      return {
        ...state,
        cartitems: state.cartitems.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: action.payload.qty }
            : product
        ),
      };
    default:
      return state;
  }
}

export { cardItemsReducer };

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/products";
import mockData from "../../mock-data";

const initialState = {
  products: mockData,
  cart: [],
  total: 0
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = state.products.find(
        product => product.id === action.productId
      );
      console.log(addedItem);
      return {
        ...state,
        cart: [...state.cart, addedItem],
        products: state.products.filter(
          product => product.id !== action.productId
        ),
        total: state.total + addedItem.price
      };
    case REMOVE_FROM_CART:
      const removeItem = state.cart.find(
        product => product.id === action.productId
      );
      return {
        ...state,
        products: [...state.products, removeItem],
        cart: state.cart.filter(product => product.id !== action.productId),
        total: state.total - removeItem.price
      };
    default:
      return state;
  }
};

export default productsReducer;

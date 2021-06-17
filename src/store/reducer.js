import { DELETE_FROM_CART, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, OPEN_MODAL_CART, SET_CARTLIST, TOGGLE_FAVORITE } from "./types";

const initialState = {
  products: {
    data: [],
    isLoading: true,
  },
  cartList: JSON.parse(localStorage.getItem("savedToCart")) || [],
  addToCartModal: false,
  modalInfo: {
    id: "",
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
      return { ...state, products: { ...state.products, isLoading: action.payload } };
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, products: { ...state.products, data: action.payload, isLoading: false } };
    case SET_CARTLIST:
      return { ...state, cartList: action.payload, addToCartModal: !state.addToCartModal };
    case DELETE_FROM_CART:
      return { ...state, cartList: action.payload };
    case OPEN_MODAL_CART:
      return { ...state, addToCartModal: !state.addToCartModal, modalInfo: { ...state.modalInfo, id: action.payload } };
    case TOGGLE_FAVORITE:
      return { ...state, products: { ...state.products, data: action.payload } };
    default:
      return state;
  }
};

export default reducer;

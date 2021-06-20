import { DELETE_FROM_CART, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, SET_CARTLIST, TOGGLE_FAVORITE, TOGGLE_MODAL_CART } from "./types";
import { addedToCartLocalStorage, addFavoriteToLocalStorage, favoriteIdArray } from "./utilities";

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
      const item = state.products.data.find((el) => el.id === state.modalInfo.id);
      const addedToCart = [...state.cartList, item];
      addedToCartLocalStorage(addedToCart);
      return { ...state, cartList: addedToCart, addToCartModal: !state.addToCartModal };
    case DELETE_FROM_CART:
      const newArrray = state.cartList.filter((el) => el.id !== action.payload);
      addedToCartLocalStorage(newArrray);
      return { ...state, cartList: newArrray };
    case TOGGLE_MODAL_CART:
      return { ...state, addToCartModal: !state.addToCartModal, modalInfo: { ...state.modalInfo, id: action.payload } };
    case TOGGLE_FAVORITE:
      const addedToFavorite = state.products.data.map((el) => {
        return el.id === action.payload ? { ...el, isFavorite: !el.isFavorite } : el;
      });
      addFavoriteToLocalStorage(favoriteIdArray(addedToFavorite));
      return { ...state, products: { ...state.products, data: addedToFavorite } };
    default:
      return state;
  }
};

export default reducer;

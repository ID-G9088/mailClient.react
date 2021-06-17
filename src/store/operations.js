import axios from "axios";
import { LOAD_PRODUCTS_REQUEST } from "./types";

export const getProducts = () => (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS_REQUEST, payload: true });
  axios("/products.json").then((res) => {
    const normalizedData = normalizeData(res.data);
    dispatch({ type: "LOAD_PRODUCTS_SUCCESS", payload: normalizedData });
  });
};

const normalizeData = (data) => {
  return data.map((el) => {
    const favoriteValue = JSON.parse(localStorage.getItem("savedToFavorite")) || [];
    return { ...el, isFavorite: favoriteValue.includes(el.id) };
  });
};

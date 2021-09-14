import { SET_CARTLIST } from "./types";

export const setCartList = (data) => {
  return { type: SET_CARTLIST, payload: data };
};

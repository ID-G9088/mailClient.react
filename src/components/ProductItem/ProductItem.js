import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../../store/selectors";
import { OPEN_MODAL_CART, TOGGLE_FAVORITE } from "../../store/types";

const ProductItem = (props) => {
  const { item } = props;

  const dispatch = useDispatch();

  const products = useSelector(getProductsList);

  const openAddToCart = (id) => {
    dispatch({ type: OPEN_MODAL_CART, payload: id });
  };

  const favoriteIdArray = (data) => {
    const favoriteLocalArray = data.filter((el) => el.isFavorite).map((el) => el.id);
    return favoriteLocalArray;
  };

  const toggleFavorite = (id) => {
    const addedToFavorite = products.map((el) => {
      return el.id === id ? { ...el, isFavorite: !el.isFavorite } : el;
    });
    dispatch({ type: TOGGLE_FAVORITE, payload: addedToFavorite });
    addFavoriteToLocalStorage(favoriteIdArray(addedToFavorite));
  };

  const addFavoriteToLocalStorage = (data) => {
    localStorage.setItem("savedToFavorite", JSON.stringify(data));
  };

  return (
    <li>
      <Icon onClick={() => toggleFavorite(item.id)} color="#00FF00" filled={item.isFavorite} />
      Name: {item.name}, price: {item.price}$, color: {item.color}.
      <Button
        onClick={() => {
          openAddToCart(item.id);
        }}
        text="Add to cart"
      />
    </li>
  );
};
ProductItem.defaultProps = {
  favoriteList: [],
};

ProductItem.propTypes = {
  item: propTypes.object.isRequired,
  favoriteList: propTypes.array,
  updateFavorite: propTypes.func,
};

export default ProductItem;

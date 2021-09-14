import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../../store/selectors";
import { TOGGLE_MODAL_CART, TOGGLE_FAVORITE } from "../../store/types";

const ProductItem = (props) => {
  const { item } = props;

  const dispatch = useDispatch();

  const products = useSelector(getProductsList);

  const openAddToCart = (id) => {
    dispatch({ type: TOGGLE_MODAL_CART, payload: id });
  };

  const toggleFavorite = (id) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: id });
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

import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import propTypes from "prop-types";

const ProductItem = (props) => {
  const { item, toggleFavorite, openAddToCart } = props;
  return (
    <li>
      <Icon onClick={() => toggleFavorite(item.id)} color="#00FF00" filled={item.isFavorite} />
      Name: {item.name}, price: {item.price}$, color: {item.color}.
      <Button
        onClick={() => {
          openAddToCart(item.id);
          console.log(item.id);
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

import React, { Component } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import propTypes from "prop-types";

export default class ProductItem extends Component {
  render() {
    const { item, toggleFavorite, openAddToCart } = this.props;

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
  }
}

ProductItem.defaultProps = {
  favoriteList: [],
};

ProductItem.propTypes = {
  item: propTypes.object.isRequired,
  favoriteList: propTypes.array,
  updateFavorite: propTypes.func,
};

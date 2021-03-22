import React, { Component } from "react";
import Button from "../Button/Button";
import propTypes from "prop-types";

export default class Favorite extends Component {
  render() {
    const { deleteFavorite, products } = this.props;
    return (
      <ol>
        FAVORITES PRODUCTS:
        {products
          .filter((el) => el.isFavorite)
          .map((el) => {
            return (
              <li>
                Name: {el.name}, price: {el.price} $.
                <Button text="X" onClick={() => deleteFavorite(el.id)} />
              </li>
            );
          })}
      </ol>
    );
  }
}

Favorite.propTypes = {
  products: propTypes.array,
  item: propTypes.object.isRequired,
  deleteFavorite: propTypes.func,
};

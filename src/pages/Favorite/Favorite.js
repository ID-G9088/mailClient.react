import React from "react";
import Button from "../../components/Button/Button";
import propTypes from "prop-types";

const Favorite = (props) => {
  const { toggleFavorite, products } = props;
  return (
    <ol>
      FAVORITES PRODUCTS:
      {products
        .filter((el) => el.isFavorite)
        .map((el) => {
          return (
            <li key={el.id}>
              Name: {el.name}, price: {el.price} $, id: {el.id}.
              <Button text="X" onClick={() => toggleFavorite(el.id)} />
            </li>
          );
        })}
    </ol>
  );
};
Favorite.propTypes = {
  products: propTypes.array,
  item: propTypes.object,
  deleteFavorite: propTypes.func,
};

export default Favorite;

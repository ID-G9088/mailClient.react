import React from "react";
import Button from "../../components/Button/Button";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductsList } from "../../store/selectors";
import { TOGGLE_FAVORITE } from "../../store/types";

const Favorite = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsList);

  const toggleFavorite = (id) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: id });
  };

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

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

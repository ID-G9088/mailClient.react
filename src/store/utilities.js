export const addedToCartLocalStorage = (data) => {
  localStorage.setItem("savedToCart", JSON.stringify(data));
};

export const addFavoriteToLocalStorage = (data) => {
  localStorage.setItem("savedToFavorite", JSON.stringify(data));
};

export const favoriteIdArray = (data) => {
  const favoriteLocalArray = data.filter((el) => el.isFavorite).map((el) => el.id);
  return favoriteLocalArray;
};

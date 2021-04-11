import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./components/Loading/Loading";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("savedToCart")) || []);
  const [isLoading, setIsLoading] = useState(true);
  const [addToCartModal, setAddToCartModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({ id: "" });

  useEffect(() => {
    axios("/products.json").then((response) => {
      const normalizedData = normalizeData(response.data);
      updateProducts(normalizedData);
      toggleLoading();
    });
  }, []);

  const normalizeData = (data) => {
    return data.map((el) => {
      const favoriteValue = JSON.parse(localStorage.getItem("savedToFavorite")) || [];
      return { ...el, isFavorite: favoriteValue.includes(el.id) };
    });
  };

  const favoriteIdArray = (data) => {
    const favoriteLocalArray = data.filter((el) => el.isFavorite).map((el) => el.id);
    return favoriteLocalArray;
  };

  const toggleFavorite = (id) => {
    const addedToFavorite = products.map((el) => {
      return el.id === id ? { ...el, isFavorite: !el.isFavorite } : el;
    });
    updateProducts(addedToFavorite);
    addFavoriteToLocalStorage(favoriteIdArray(addedToFavorite));
  };

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const addFavoriteToLocalStorage = (data) => {
    localStorage.setItem("savedToFavorite", JSON.stringify(data));
  };

  const updateProducts = (data) => {
    setProducts(data);
  };

  const updatecartList = (data) => {
    setCartList(data);
  };

  const deleteFromCart = (id) => {
    const newArrray = cartList.filter((el) => el.id !== id);
    updatecartList(newArrray);
    addedToCartLocalStorage(newArrray);
  };

  const toggleCartModal = () => {
    setAddToCartModal(!addToCartModal);
  };

  const openAddToCart = (id) => {
    toggleCartModal();
    updateModal(id);
  };

  const addToCart = () => {
    const item = products.find((el) => el.id === modalInfo.id);
    const addedToCart = [...cartList, item];
    updatecartList(addedToCart);
    toggleCartModal();
    addedToCartLocalStorage(addedToCart);
  };

  const addedToCartLocalStorage = (data) => {
    localStorage.setItem("savedToCart", JSON.stringify(data));
  };

  const updateModal = (id) => {
    setModalInfo({ ...modalInfo, id: id });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navigation productsCart={cartList} />
      <AppRoutes
        products={products}
        toggleFavorite={toggleFavorite}
        productsCart={cartList}
        deleteFromCart={deleteFromCart}
        updateModal={updateModal}
        openAddToCart={openAddToCart}
        addToCartModal={addToCartModal}
        addToCart={addToCart}
        modalInfo={modalInfo}
      />
    </div>
  );
};

export default App;

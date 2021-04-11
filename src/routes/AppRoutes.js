import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Favorite from "../pages/Favorite/Favorite";
import ProductList from "../components/ProductList/ProductList";
import Page404 from "../components/Page404/Page404";

const AppRoutes = (props) => {
  const { products, toggleFavorite, productsCart, deleteFromCart, updateModal, openAddToCart, addToCartModal, addToCart, modalInfo } = props;

  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          exact
          path="/home"
          render={() => (
            <ProductList updateModal={updateModal} openAddToCart={openAddToCart} toggleFavorite={toggleFavorite} products={products} addToCartModal={addToCartModal} addToCart={addToCart} />
          )}
        />
        <Route
          exact
          path="/cart"
          render={() => <Cart productsCart={productsCart} deleteFromCart={deleteFromCart} openAddToCart={openAddToCart} addToCartModal={addToCartModal} addToCart={addToCart} modalInfo={modalInfo} />}
        />
        <Route exact path="/favorite" render={() => <Favorite products={products} toggleFavorite={toggleFavorite} />} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

export default AppRoutes;

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Favorite from "../pages/Favorite/Favorite";
import ProductList from "../components/ProductList/ProductList";
import Page404 from "../components/Page404/Page404";

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" render={() => <ProductList />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/favorite" render={() => <Favorite />} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

export default AppRoutes;

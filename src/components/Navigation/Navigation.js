import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = (props) => {
  const { productsCart } = props;

  return (
    <div className="navigation">
      <ul className="navigation__list">
        <NavLink className="navigation__item" activeClassName="is-active" to="/">
          HOME
        </NavLink>
        <NavLink className="navigation__item" activeClassName="is-active" to="/cart">
          CART ({productsCart.length})
        </NavLink>
        <NavLink className="navigation__item" activeClassName="is-active" to="/favorite">
          FAVORITE
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

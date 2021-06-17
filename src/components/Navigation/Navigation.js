import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getCartList } from "../../store/selectors";
import "./Navigation.scss";

const Navigation = () => {
  const productsCart = useSelector(getCartList);

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

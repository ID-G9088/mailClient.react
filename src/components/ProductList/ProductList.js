import React, { Component } from "react";
import Favorite from "../Favorite/Favorite";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import propTypes from "prop-types";

export default class ProductList extends Component {
  render() {
    const { products, toggleFavorite, openAddToCart, updateModal } = this.props;

    return (
      <div>
        <div className="productList">
          <ol>
            {products.map((el) => {
              return <ProductItem openAddToCart={openAddToCart} toggleFavorite={toggleFavorite} key={el.id} item={el} updateFavorite={this.updateFavorite} updateModal={updateModal} />;
            })}
          </ol>
        </div>
      </div>
    );
  }
}

ProductList.defaultProps = {
  products: [],
  favoriteList: [],
};

ProductList.propTypes = {
  products: propTypes.array,
  favoriteList: propTypes.array,
};

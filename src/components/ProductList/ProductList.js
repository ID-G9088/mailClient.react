import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import propTypes from "prop-types";

const ProductList = (props) => {
  const { products, toggleFavorite, openAddToCart, updateModal, addToCartModal, addToCart } = props;

  return (
    <div>
      <div className="productList">
        <ol>
          {products.map((el) => {
            return <ProductItem openAddToCart={openAddToCart} toggleFavorite={toggleFavorite} key={el.id} item={el} updateModal={updateModal} />;
          })}
        </ol>
      </div>
      {addToCartModal && (
        <Modal
          onClick={openAddToCart}
          className="modal modal--first"
          actions={{
            cancel: () => {
              return <Button text="CANCEL" onClick={openAddToCart} />;
            },
            ok: () => {
              return <Button text="OK" onClick={addToCart} />;
            },
          }}
          header="Adding to cart"
          text="Do you what to add this item to cart ?"
          closeButton={true}
        />
      )}
    </div>
  );
};
ProductList.defaultProps = {
  products: [],
  favoriteList: [],
};

ProductList.propTypes = {
  products: propTypes.array,
  favoriteList: propTypes.array,
};
export default ProductList;

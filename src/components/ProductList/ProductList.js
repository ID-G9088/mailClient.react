import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/operations";
import Loading from "../Loading/Loading";
import { getLoading, getProductsList, getAddToCartModal } from "../../store/selectors";
import { setCartList } from "../../store/actions";
import { TOGGLE_MODAL_CART } from "../../store/types";

const ProductList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const products = useSelector(getProductsList);
  const addToCartModal = useSelector(getAddToCartModal);

  const addToCart = () => {
    dispatch(setCartList());
  };

  const openAddToCart = (id) => {
    dispatch({ type: TOGGLE_MODAL_CART, payload: id });
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="productList">
        <ol>
          {products.map((el) => {
            return <ProductItem key={el.id} item={el} />;
          })}
        </ol>
      </div>
      {addToCartModal && (
        <Modal
          onClick={() => openAddToCart()}
          className="modal modal--first"
          actions={{
            cancel: () => {
              return <Button text="CANCEL" onClick={() => openAddToCart()} />;
            },
            ok: () => {
              return <Button text="OK" onClick={() => addToCart()} />;
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

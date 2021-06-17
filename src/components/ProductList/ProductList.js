import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/operations";
import Loading from "../Loading/Loading";
import { getLoading, getProductsList, getCartList, getAddToCartModal, getModalInfo } from "../../store/selectors";
import { setCartList } from "../../store/actions";
import { OPEN_MODAL_CART } from "../../store/types";

const ProductList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const products = useSelector(getProductsList);
  const cartList = useSelector(getCartList);
  const addToCartModal = useSelector(getAddToCartModal);
  const modalInfo = useSelector(getModalInfo);

  const addToCart = () => {
    const item = products.find((el) => el.id === modalInfo.id);
    const addedToCart = [...cartList, item];
    dispatch(setCartList(addedToCart));
    addedToCartLocalStorage(addedToCart);
  };

  const openAddToCart = (id) => {
    dispatch({ type: OPEN_MODAL_CART, payload: id });
  };

  const addedToCartLocalStorage = (data) => {
    localStorage.setItem("savedToCart", JSON.stringify(data));
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

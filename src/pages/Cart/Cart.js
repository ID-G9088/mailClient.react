import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { getAddToCartModal, getCartList, getModalInfo } from "../../store/selectors";
import { DELETE_FROM_CART, OPEN_MODAL_CART } from "../../store/types";

const Cart = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector(getCartList);
  const addToCartModal = useSelector(getAddToCartModal);
  const cartList = useSelector(getCartList);
  const modalInfo = useSelector(getModalInfo);

  const deleteFromCart = (id) => {
    const newArrray = cartList.filter((el) => el.id !== id);
    dispatch({ type: DELETE_FROM_CART, payload: newArrray });
    addedToCartLocalStorage(newArrray);
  };

  const addedToCartLocalStorage = (data) => {
    localStorage.setItem("savedToCart", JSON.stringify(data));
  };

  const openAddToCart = (id) => {
    dispatch({ type: OPEN_MODAL_CART, payload: id });
  };

  return (
    <div>
      CART:
      <ol>
        {productsCart.map((el, index) => {
          return (
            <li key={index}>
              Name: {el.name}, price: {el.price} $, id: {el.id}.
              {addToCartModal && (
                <Modal
                  className="modal modal--first"
                  actions={{
                    cancel: () => {
                      return <Button text="Cancel" onClick={() => openAddToCart()} />;
                    },
                    ok: () => {
                      return (
                        <Button
                          text="Confirm"
                          onClick={() => {
                            deleteFromCart(modalInfo.id);
                            console.log(el.id, modalInfo.id);
                            openAddToCart();
                          }}
                        />
                      );
                    },
                  }}
                  header="Deleting from cart"
                  text="Delete selected item from cart ?"
                  closeButton={false}
                />
              )}
              <Button text="X" onClick={() => openAddToCart(el.id)} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Cart;

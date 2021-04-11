import React from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const Cart = (props) => {
  const { productsCart, deleteFromCart, addToCart, openAddToCart, addToCartModal, modalInfo } = props;
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
                      return <Button text="Cancel" onClick={openAddToCart} />;
                    },
                    ok: () => {
                      return (
                        <Button
                          text="Confirm"
                          onClick={() => {
                            deleteFromCart(modalInfo.id);
                            console.log(el.id);
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
              <Button
                text="X"
                onClick={() => {
                  openAddToCart(el.id);
                  console.log(el.id);
                }}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Cart;

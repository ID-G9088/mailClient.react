import React, { Component } from "react";
import Button from "../Button/Button";

export default class Cart extends Component {
  render() {
    const { products, deleteFromCart } = this.props;
    return (
      <div>
        CART:
        <ol>
          {products.map((el) => {
            return (
              <li>
                Name: {el.name}, price: {el.price} $.
                <Button
                  text="X"
                  onClick={() => {
                    deleteFromCart(el.id);
                  }}
                />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

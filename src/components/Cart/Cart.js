import React, { Component } from "react";
import Button from "../Button/Button";

export default class Cart extends Component {
  render() {
    const { products, deleteFromCart } = this.props;
    return (
      <div>
        CART:
        <ol>
          {products.map((el, index) => {
            return (
              <li key={index}>
                Name: {el.name}, price: {el.price} $, id: {el.id}.
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

import React from "react";
import "./App.css";
import axios from "axios";
import Loading from "./components/Loading/Loading";
import ProductList from "./components/ProductList/ProductList";
import Favorite from "./components/Favorite/Favorite";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cartList: [],
      isLoading: true,
      addToCartModal: false,
      modalInfo: {
        id: "",
      },
    };
  }

  normalizeData = (data) => {
    return data.map((el) => {
      el.isFavorite = false;
      return el;
    });
  };

  toggleFavorite = (id) => {
    const newArray = this.state.products.map((el) => {
      if (el.id === id) {
        el.isFavorite = !el.isFavorite;
      }
      return el;
    });
    this.setState({ products: newArray });
  };

  componentDidMount() {
    axios("/products.json").then((response) => {
      const array = this.normalizeData(response.data);
      this.updateProducts(response.data);
      this.setState({ isLoading: !this.state.isLoading });
    });
  }

  updateProducts = (data) => {
    this.setState({ products: data });
  };

  deleteFromCart = (id) => {
    const { cartList } = this.state;
    const newArrray = cartList.filter((el) => el.id !== id);
    this.setState({ cartList: newArrray });
  };

  openAddToCart = (id) => {
    this.setState({ addToCartModal: !this.state.addToCartModal });
    this.updateModal(id);
  };

  addToCart = () => {
    const { cartList, products, modalInfo } = this.state;
    let newArray;
    const item = products.find((el) => el.id === modalInfo.id);
    newArray = [...cartList, item];
    this.setState({ cartList: newArray });
    this.setState({ addToCartModal: !this.state.addToCartModal });
  };

  updateModal = (id) => {
    this.setState({ modalInfo: { ...this.state.modalInfo, id: id } });
  };

  render() {
    const { isLoading, products, cartList, addToCartModal } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className="App">
        <ProductList updateModal={this.updateModal} openAddToCart={this.openAddToCart} cartList={cartList} toggleFavorite={this.toggleFavorite} products={products} />
        <Favorite products={products} deleteFavorite={this.toggleFavorite} />
        <Cart products={cartList} deleteFromCart={this.deleteFromCart} />
        {addToCartModal && (
          <Modal
            onClick={this.openAddToCart}
            className="modal modal--first"
            actions={{
              cancel: () => {
                return <Button text="CANCEL" onClick={this.openAddToCart} />;
              },
              ok: () => {
                return <Button text="OK" onClick={this.addToCart} />;
              },
            }}
            header="Adding to cart"
            text="Do you what to add this item to cart ?"
            closeButton={true}
          />
        )}
      </div>
    );
  }
}

export default App;

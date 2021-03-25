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
      cartList: JSON.parse(localStorage.getItem("savedToCart")) || [],
      isLoading: true,
      addToCartModal: false,
      modalInfo: {
        id: "",
      },
    };
  }

  normalizeData = (data) => {
    return data.map((el) => {
      const favoriteValue = JSON.parse(localStorage.getItem("savedToFavorite")) || [];
      return { ...el, isFavorite: favoriteValue.includes(el.id) };
    });
  };

  favoriteIdArray = (data) => {
    const favoriteLocalArray = data.filter((el) => el.isFavorite).map((el) => el.id);
    return favoriteLocalArray;
  };

  toggleFavorite = (id) => {
    const addedToFavorite = this.state.products.map((el) => {
      return el.id === id ? { ...el, isFavorite: !el.isFavorite } : el;
    });
    this.updateProducts(addedToFavorite);
    this.addFavoriteToLocalStorage(this.favoriteIdArray(addedToFavorite));
  };

  toggleLoading = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  addFavoriteToLocalStorage = (data) => {
    localStorage.setItem("savedToFavorite", JSON.stringify(data));
  };

  componentDidMount() {
    axios("/products.json").then((response) => {
      const normalizedData = this.normalizeData(response.data);
      this.updateProducts(normalizedData);
      this.toggleLoading();
    });
  }

  updateProducts = (data) => {
    this.setState({ products: data });
  };

  updatecartList = (data) => {
    this.setState({ cartList: data });
  };

  deleteFromCart = (id) => {
    const { cartList } = this.state;
    const newArrray = cartList.filter((el) => el.id !== id);
    this.updatecartList(newArrray);
    this.addedToCartLocalStorage(newArrray);
  };

  toggleCartModal = () => {
    this.setState({ addToCartModal: !this.state.addToCartModal });
  };

  openAddToCart = (id) => {
    this.toggleCartModal();
    this.updateModal(id);
  };

  addToCart = () => {
    const { cartList, products, modalInfo } = this.state;
    const item = products.find((el) => el.id === modalInfo.id);
    const addedToCart = [...cartList, item];
    this.updatecartList(addedToCart);
    this.toggleCartModal();
    this.addedToCartLocalStorage(addedToCart);
  };

  addedToCartLocalStorage = (data) => {
    localStorage.setItem("savedToCart", JSON.stringify(data));
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
        <ProductList updateModal={this.updateModal} openAddToCart={this.openAddToCart} toggleFavorite={this.toggleFavorite} products={products} />
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

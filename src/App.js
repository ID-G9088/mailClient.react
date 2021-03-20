import React from "react";
import Button from "./Components/Button/Button.js";
import Modal from "./Components/Modal/Modal.js";
import "./App.css";
import axios from "axios";
import Loading from "./Components/Loading/Loading.js";
import ProductList from "./Components/ProductList/ProductList.js";
import ProductItem from "./Components/ProductItem/ProductItem.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isShown1: false,
            isShown2: false,
            products: [],
            isLoading: true,
        };
    }

    openModal1 = () => {
        this.setState({ isShown1: !this.state.isShown1 });
    };

    openModal2 = () => {
        this.setState({ isShown2: !this.state.isShown2 });
    };

    componentDidMount() {
        axios("./products.json").then((response) => {
            this.updateProducts(response.data);
            this.setState({ isLoading: !this.state.isLoading });
            console.log(this.state.products);
        });
    }

    updateProducts = (data) => {
        this.setState({ products: data });
    };

    render() {
        const { isShown1, isShown2, isLoading, products } = this.state;

        if (isLoading) {
            return <Loading />;
        }

        return (
            <div className="App">
                {isShown1 && (
                    <Modal
                        onClick={this.openModal1}
                        className="modal modal--first"
                        actions={{
                            cancel: () => {
                                return <Button text="CANCEL" />;
                            },
                            ok: () => {
                                return <Button text="OK" />;
                            },
                        }}
                        closeButton={true}
                        header="First modal header"
                        text="FIRST MODAL TEXT"
                    />
                )}
                {isShown2 && (
                    <Modal
                        onClick={this.openModal2}
                        className="modal modal--second"
                        actions={{
                            cancel: () => {
                                return <Button text="CANCEL" />;
                            },
                            ok: () => {
                                return <Button text="OK" />;
                            },
                        }}
                        closeButton={false}
                        header="Second modal header"
                        text="SECOND MODAL TEXT"
                    />
                )}
                <Button onClick={this.openModal1} text="First modal window" style={{ backgroundColor: "red", padding: "10px 20px", marginBottom: "20px" }} />
                <Button onClick={this.openModal2} text="Second modal window" style={{ backgroundColor: "yellow", padding: "10px 20px" }} />

                <ProductList products={products} />
            </div>
        );
    }
}

export default App;

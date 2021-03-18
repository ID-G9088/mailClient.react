import React from "react";
import PropTypes from "prop-types";
import Button from "./Components/Button/Button.js";
import Modal from "./Components/Modal/Modal.js";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isShown1: false,
            isShown2: false,
        };
    }

    openModal1 = () => {
        this.setState({ isShown1: !this.state.isShown1 });
    };

    openModal2 = () => {
        this.setState({ isShown2: !this.state.isShown2 });
    };

    closeModal1 = (event) => {
        if (event.target === event.currentTarget || event.target.classList.contains("closeButton")) {
            this.setState({ isShown1: !this.state.isShown1 });
        }
    };

    closeModal2 = (event) => {
        if (event.target === event.currentTarget || event.target.classList.contains("closeButton")) {
            this.setState({ isShown2: !this.state.isShown2 });
        }
    };

    render() {
        const { isShown1, isShown2 } = this.state;

        return (
            <div className="App">
                {isShown1 && (
                    <Modal
                        onClick={this.closeModal1}
                        className="modal modal--first"
                        actions={() => {
                            return (
                                <div>
                                    <button>CLOSE</button>
                                    <button>OK</button>
                                </div>
                            );
                        }}
                        closeButton={true}
                        header="First modal header"
                        text="FIRST MODAL TEXT"
                    />
                )}
                {isShown2 && (
                    <Modal
                        onClick={this.closeModal2}
                        className="modal modal--second"
                        actions={() => {
                            return (
                                <div>
                                    <button>CLOSE</button>
                                    <button>OK</button>
                                </div>
                            );
                        }}
                        closeButton={false}
                        header="Second modal header"
                        text="SECOND MODAL TEXT"
                    />
                )}
                <Button onClick={this.openModal1} text="First modal window" style={{ backgroundColor: "red", padding: "10px 20px", marginRight: "20px" }} />
                <Button onClick={this.openModal2} text="Second modal window" style={{ backgroundColor: "yellow", padding: "10px 20px" }} />
            </div>
        );
    }
}

export default App;

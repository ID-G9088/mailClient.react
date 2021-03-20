import React, { Component } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Icon from "../Icon/Icon.js";
import propTypes from "prop-types";

export default class ProductItem extends Component {
    constructor() {
        super();
        this.state = {
            addToCartModal: false,
            favorite: false,
        };
    }

    openAddToCart = () => {
        this.setState({ addToCartModal: !this.state.addToCartModal });
    };

    addToFavorite = () => {
        const { favoriteList, item, updateFavorite } = this.props;
        this.setState({ favorite: !this.state.favorite });
        favoriteList.push(item);
        updateFavorite(favoriteList);
    };

    render() {
        const { item, favoriteList } = this.props;
        const { addToCartModal, favorite } = this.state;

        return (
            <li>
                <Icon onClick={this.addToFavorite} color="#00FF00" filled={favorite} />
                Name: {item.name}, price: {item.price}$, color: {item.color}.
                <Button onClick={this.openAddToCart} text="Add to cart" />
                {addToCartModal && (
                    <Modal
                        onClick={this.openAddToCart}
                        className="modal modal--first"
                        actions={{
                            cancel: () => {
                                return <Button text="CANCEL" />;
                            },
                            ok: () => {
                                return <Button text="OK" />;
                            },
                        }}
                        header="CART"
                        text="ITEM ADDED TO CART"
                        closeButton={true}
                    />
                )}
            </li>
        );
    }
}

ProductItem.defaultProps = {
    favoriteList: [],
};

ProductItem.propTypes = {
    item: propTypes.object.isRequired,
    favoriteList: propTypes.array,
    updateFavorite: propTypes.func.isRequired,
};

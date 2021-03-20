import React, { Component } from "react";
import Button from "../Button/Button";
import propTypes from "prop-types";

export default class Favorite extends Component {
    render() {
        const { item, deleteFavorite } = this.props;
        return (
            <li>
                Name: {item.name}, price: {item.price} $.
                <Button text="X" onClick={() => deleteFavorite(item)} />
            </li>
        );
    }
}

Favorite.propTypes = {
    item: propTypes.object.isRequired,
    deleteFavorite: propTypes.func,
};

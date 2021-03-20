import React, { Component } from "react";
import Favorite from "../Favorite/Favorite";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import propTypes from "prop-types";

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            favoriteList: [],
            showFavorites: false,
        };
    }

    updateFavorite = (data) => {
        this.setState({ favoriteList: data });
    };

    deleteFromFavorite = (element) => {
        const { favoriteList } = this.state;
        const newArrray = favoriteList.filter((el) => el.id !== element.id);
        this.setState({ favoriteList: newArrray });
    };

    render() {
        const { products } = this.props;
        const { favoriteList } = this.state;

        return (
            <div>
                <div className="productList">
                    <ol>
                        {products.map((el) => {
                            return <ProductItem key={el.id} item={el} favoriteList={favoriteList} updateFavorite={this.updateFavorite} />;
                        })}
                    </ol>
                </div>

                {(favoriteList.length !== 0 ? true : false) && (
                    <div>
                        <ol>
                            FAVORITES PRODUCTS:
                            {favoriteList.map((el) => {
                                return <Favorite key={el.id} item={el} deleteFavorite={this.deleteFromFavorite} />;
                            })}
                        </ol>
                    </div>
                )}
            </div>
        );
    }
}

ProductList.defaultProps = {
    products: [],
    favoriteList: [],
};

ProductList.propTypes = {
    products: propTypes.array,
    favoriteList: propTypes.array,
};

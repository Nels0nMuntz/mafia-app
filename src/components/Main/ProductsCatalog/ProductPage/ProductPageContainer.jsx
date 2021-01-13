import React from 'react'
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';


import Preloader from '../../../Preloader/Preloader';
import ProductPage from './ProductPage'
import { requestCatalogItem } from '../../../../redux/catalog-reducer';


const ProductPageContainer = ({ menuItem, productId }) => {

    let history = useHistory();
    console.log(history);

    const dispatch = useDispatch();
    const product = useSelector(createSelector(
        state => state.catalog[menuItem],
        product => product && product.list.find(({ id }) => +productId === id)
    ));
    const cart = useSelector(createSelector(
        state => state.cart.selected,
        selected => selected
    ));

    React.useEffect(() => {
        if (product) return;
        dispatch(requestCatalogItem(menuItem));
    }, [product]);

    return (
        product ? (
            <ProductPage
                menuItem={menuItem}
                product={product}
                cart={cart}
            />
        ) : (
                <Preloader />
            )
    );
}

ProductPageContainer.propTypes = {
    menuItem: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
};

export default ProductPageContainer

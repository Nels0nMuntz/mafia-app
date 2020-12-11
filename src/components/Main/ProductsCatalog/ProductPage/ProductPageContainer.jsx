import React from 'react'
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


import ProductPage from './ProductPage'
import { requestCatalogItem } from '../../../../redux/catalog-reducer';
import Preloader from '../../../Preloader/Preloader';


const ProductPageContainer = ({ menuItem, productId }) => {

    const dispatch = useDispatch();
    const productSelector = createSelector(
        state => state.catalog[menuItem].list,
        productsList => productsList ? productsList.find(({ id }) => +productId === id) : {}
    );
    const product = useSelector(productSelector);
    const isExists = !!Object.keys(product).length;

    React.useEffect(() => isExists ? undefined : dispatch(requestCatalogItem()), [product]);

    return (
        isExists ? (
            <ProductPage
                product={product}
            />
        ) : (
            <Preloader/>
        )
    );
}

ProductPageContainer.propTypes = {
    menuItem: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
}

export default ProductPageContainer

import React from 'react'
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


import ProductPage from './ProductPage'
import { requestCatalogItem } from '../../../../redux/catalog-reducer';
import Preloader from '../../../Preloader/Preloader';


const ProductPageContainer = ({ menuItem, productId }) => {

    const dispatch = useDispatch();
    const product = useSelector(createSelector(
        state => state.catalog[menuItem],
        product => product ? product.list.find(({ id }) => +productId === id) : {}
    ));
    const isExists = !!Object.keys(product).length;    

    React.useEffect(() => isExists ? undefined : dispatch(requestCatalogItem(menuItem)), [isExists]);

    return (
        isExists ? (
            <ProductPage
                product={product}
            />
        ) : (
                <Preloader />
            )
    );
}

ProductPageContainer.propTypes = {
    menuItem: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
}

export default ProductPageContainer

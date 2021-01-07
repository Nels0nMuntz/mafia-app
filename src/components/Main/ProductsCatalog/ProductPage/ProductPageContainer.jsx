import React from 'react'
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


import Preloader from '../../../Preloader/Preloader';
import ProductPage from './ProductPage'
import { requestCatalogItem } from '../../../../redux/catalog-reducer';
import { setProductPage, setSize, setGift, changeProductPageAddition } from '../../../../redux/productPage-reducer';
import { addProduct, decreaseCount, increaseCount, removeProduct, changeCartAddition } from '../../../../redux/cart-reducer';


const ProductPageContainer = ({ menuItem, productId }) => {

    const dispatch = useDispatch();
    const catalogItem = useSelector(createSelector(
        state => state.catalog[menuItem],
        product => product && product.list.find(({ id }) => +productId === id)
    ));
    const productItem = useSelector(state => state.productPage.product);

    const onSetSize = (weight, price, discount, checkbox, button) => dispatch(setSize(weight, price, discount, checkbox, button));
    const onSetGift = value => dispatch(setGift(value));
    const onChangeAddition = (productId, additionId) => {
        dispatch(changeProductPageAddition(additionId));
        dispatch(changeCartAddition(productId, additionId));
    };
    const onAddProduct = product => dispatch(addProduct(product));
    const onIncreaseCount = id => dispatch(increaseCount(id));
    const onDecreaseCount = id => dispatch(decreaseCount(id));
    const onRemoveProduct = id => dispatch(removeProduct(id));

    React.useEffect(() => {
        console.log('useEffect call');
        if(!catalogItem){
            dispatch(requestCatalogItem(menuItem));
        }else{
            dispatch(setProductPage(catalogItem));
        }
    }, [catalogItem]);

    return (
        catalogItem && productItem ? (
            <ProductPage
                product={productItem}
                onSetSize={onSetSize}
                onSetGift={onSetGift}
                onChangeAddition={onChangeAddition}
                onAddProduct={onAddProduct}
                onIncreaseCount={onIncreaseCount}
                onDecreaseCount={onDecreaseCount}
                onRemoveProduct={onRemoveProduct}
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

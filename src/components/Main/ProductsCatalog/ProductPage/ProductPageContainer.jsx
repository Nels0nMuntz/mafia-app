import React from 'react'
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


import Preloader from '../../../Preloader/Preloader';
import ProductPage from './ProductPage'
import { requestCatalogItem, changeActiveProduct } from '../../../../redux/catalog-reducer';
import { addProduct, decreaseCount, increaseCount, removeProduct, changeCartAddition } from '../../../../redux/cart-reducer';


const ProductPageContainer = ({ menuItem, productId }) => {

    const dispatch = useDispatch();
    const product = useSelector(createSelector(
        state => state.catalog[menuItem],
        product => product && product.list.find(({ id }) => +productId === id)
    ));
    const cart = useSelector(createSelector(
        state => state.cart.selected,
        selected => selected
    ));


    // const isSelected = useSelector(state => state.catalog.isSelectedActiveProduct);


    // const productItem = useSelector(state => state.productPage.product);

    // const onSetSize = (weight, price, discount, checkbox, button) => dispatch(setSize(weight, price, discount, checkbox, button));
    // const onSetGift = value => dispatch(setGift(value));
    // const onChangeAddition = (productId, additionId) => {
    //     dispatch(changeProductPageAddition(additionId));
    //     dispatch(changeCartAddition(productId, additionId));
    // };
    // const onAddProduct = product => dispatch(addProduct(product));
    // const onIncreaseCount = id => dispatch(increaseCount(id));
    // const onDecreaseCount = id => dispatch(decreaseCount(id));
    // const onRemoveProduct = id => dispatch(removeProduct(id));

    React.useEffect(() => {
        if (product) return;
        dispatch(requestCatalogItem(menuItem));
        // const initializeCatalogItem = async () => Promise.resolve(dispatch(requestCatalogItem(menuItem))).then(() => changeActiveProduct(menuItem, +productId));
        // initializeCatalogItem();

        // if(!catalogItem){
        //     dispatch(requestCatalogItem(menuItem));
        // }else{
        //     dispatch(setProductPage(catalogItem));
        // }
    }, [product]);

    return (
        product ? (
            <ProductPage
                menuItem={menuItem}
                product={product}
                cart={cart}
            // onClickButton={onClickButton}
            // onClickCheckbox={onClickCheckbox}
            // onClickDropdown={onClickDropdown}
            // onClickOrder={onClickOrder}
            // onClickPlusCount={onClickPlusCount}
            // onClickMinusCount={onClickMinusCount}
            // onClickProduct={onClickProduct}
            // onSetSize={onSetSize}
            // onSetGift={onSetGift}
            // onChangeAddition={onChangeAddition}
            // onAddProduct={onAddProduct}
            // onIncreaseCount={onIncreaseCount}
            // onDecreaseCount={onDecreaseCount}
            // onRemoveProduct={onRemoveProduct}
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

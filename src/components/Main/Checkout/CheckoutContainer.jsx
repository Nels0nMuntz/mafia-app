import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import { decreaseCount, increaseCount, removeProduct } from '../../../redux/cart-reducer';
import Checkout from './Checkout';


const CheckoutContainer = () => {

    const dispatch = useDispatch();
    const cartList = useSelector(createSelector(
        state => state.cart.selected,
        selected => selected
    ));
    const onDecreaseCount = id => dispatch(decreaseCount(id));
    const onIncreaseCount = id => dispatch(increaseCount(id));
    const onRemoveProduct = id => dispatch(removeProduct(id));

    return (
        <Checkout 
            list={cartList}
            onDecreaseCount={onDecreaseCount}
            onIncreaseCount={onIncreaseCount}
            onRemoveProduct={onRemoveProduct}
        />
    )
}

export default CheckoutContainer

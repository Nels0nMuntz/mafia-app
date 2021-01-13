import React from 'react'
import { useDispatch } from 'react-redux';

import HomeSlide from './HomeSlide';
import { toggleHomeProductSize, changeHomeProductSize, changeHomeProductGift, changeHomeProductState } from '../../../../redux/home-reducer';
import { addProduct, changeProductGiftCart, increaseCount, decreaseCount, removeProduct } from '../../../../redux/cart-reducer';


const HomeSlideContainer = ({ data, isProductOrdered }) => {

    console.log('HomeSlideContainer');

    const isSelected = data.isSelected && data.uniqueId;
    const selectedSize = data.sizes.find(item => item.isSelected);
    const selectedGift = data.gifts.find(item => item.isSelected);
    const dispatch = useDispatch();
    const onClickButton = event => {
        const sizeId = +(event.target.dataset.sizeId);
        if(sizeId === selectedSize.id) return;
        dispatch(changeHomeProductSize(data.productId, sizeId));
    };
    const onClickCheckbox = () => dispatch(toggleHomeProductSize(data.productId));
    const onClickDropdown = value => {
        if(value === selectedGift.content) return;
        const giftId = data.gifts.find(item => item.content === value).id;
        dispatch(isSelected ? changeProductGiftCart(data.uniqueId, giftId) : changeHomeProductGift(data.productId, giftId));
    };
    const onClickOrder = () => {
        dispatch(changeHomeProductState(data.productId, true));
        dispatch(addProduct(data));
    };
    const onClickPlusCount = () => dispatch(increaseCount(data.uniqueId));
    const onClickMinusCount = () => {
        if(data.count > 1){
            dispatch(decreaseCount(data.uniqueId));
        }else{
            !isProductOrdered && dispatch(changeHomeProductState(data.productId, false));
            dispatch(removeProduct(data.uniqueId));
        }
    };

    return (
        <HomeSlide
            data={data}
            selectedSize={selectedSize}
            selectedGift={selectedGift}
            onClickButton={onClickButton}
            onClickCheckbox={onClickCheckbox}
            onClickDropdown={onClickDropdown}
            onClickOrder={onClickOrder}
            onClickPlusCount={onClickPlusCount}
            onClickMinusCount={onClickMinusCount}
        />
    )
}

export default React.memo(
    HomeSlideContainer,
    
)

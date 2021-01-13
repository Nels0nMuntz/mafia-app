import React from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addProduct, increaseCount, decreaseCount, removeProduct } from '../../../redux/cart-reducer';
import { changeProductSize, toggleProductSize, changeProductGift, changeProductState } from '../../../redux/catalog-reducer';
import { changeProductGiftCart } from '../../../redux/cart-reducer';
import ProductCard from './ProductCard';
import { useRouteMatch } from 'react-router-dom';


const ProductCardContainer = ({ cardData, menuItem, isEmptyCart }) => {

    const dispatch = useDispatch();

    const selectedSize = cardData.sizes.find(item => item.isSelected);
    const selectedGift = cardData.gifts.find(item => item.isSelected);
    const isSelected = cardData.isSelected && cardData.uniqueId;

    const onClickButton = event => {
        const sizeId = +(event.target.dataset.sizeId);
        if(sizeId === selectedSize.id) return;
        dispatch(changeProductSize(menuItem, cardData.productId, sizeId));
    };
    const onClickCheckbox = () => dispatch(toggleProductSize(menuItem, cardData.productId));
    const onClickDropdown = value => {
        if(value === selectedGift.content) return;
        const giftId = cardData.gifts.find(item => item.content === value).id;
        dispatch(isSelected ? changeProductGiftCart(cardData.uniqueId, giftId) : changeProductGift(menuItem, cardData.productId, giftId));
    };
    const onClickOrder = () => {
        dispatch(changeProductState(menuItem, cardData.productId, true));
        dispatch(addProduct(cardData));
    };
    const onClickPlusCount = () => dispatch(increaseCount(cardData.uniqueId));
    const onClickMinusCount = () => {
        if(cardData.count > 1){
            dispatch(decreaseCount(cardData.uniqueId));
        }else{
            isEmptyCart && dispatch(changeProductState(menuItem, cardData.productId, false));
            dispatch(removeProduct(cardData.uniqueId));
        }
    };
    const match = useRouteMatch("/:branch/:menuItem");

    return (
        <ProductCard
            data={cardData} 
            selectedSize={selectedSize}
            selectedGift={selectedGift}
            url={match.url}
            onClickButton={onClickButton}
            onClickCheckbox={onClickCheckbox}
            onClickDropdown={onClickDropdown}
            onClickOrder={onClickOrder}
            onClickPlusCount={onClickPlusCount}
            onClickMinusCount={onClickMinusCount}
        />
    )
};

ProductCardContainer.propTypes = {
    cardData: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
};

export default ProductCardContainer;

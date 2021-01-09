import React from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addProduct, increaseCount, decreaseCount, removeProduct } from '../../../redux/cart-reducer';
import { changeProductSize, toggleProductSize, changeProductGift, changeProductState, changeActiveProduct } from '../../../redux/catalog-reducer';
import { changeProductSizeCart, toggleProductSizeCart, changeProductGiftCart } from '../../../redux/cart-reducer';
import ProductCard from './ProductCard';


const ProductCardContainer = ({ cardData, url, fastCategories, menuItem }) => {

    const dispatch = useDispatch();

    const selectedSize = cardData.sizes.find(item => item.isSelected);
    const selectedGift = cardData.gifts.find(item => item.isSelected);
    const isSelected = cardData.isSelected;

    const onClickButton = event => {
        const sizeId = +(event.target.dataset.sizeId);
        if(sizeId === selectedSize.id) return;
        dispatch(isSelected ? changeProductSizeCart(cardData.uniqueId, sizeId) : changeProductSize(menuItem, cardData.uniqueId, sizeId));
    };
    const onClickCheckbox = () => dispatch(isSelected ? toggleProductSizeCart(cardData.uniqueId) : toggleProductSize(menuItem, cardData.uniqueId));
    const onClickDropdown = value => {
        if(value === selectedGift.content) return;
        const giftId = cardData.gifts.find(item => item.content === value).id;
        dispatch(isSelected ? changeProductGiftCart(cardData.uniqueId, giftId) : changeProductGift(menuItem, cardData.uniqueId, giftId));
    };
    const onClickOrder = () => {
        dispatch(changeProductState(menuItem, cardData.uniqueId, true));
        dispatch(addProduct(cardData));
    };
    const onClickPlusCount = () => dispatch(increaseCount(cardData.uniqueId));
    const onClickMinusCount = () => {
        if(cardData.count > 1){
            dispatch(decreaseCount(cardData.uniqueId));
        }else{
            dispatch(changeProductState(menuItem, cardData.uniqueId, false));
            dispatch(removeProduct(cardData.uniqueId));
        }
    };
    const onClickProduct = () => dispatch(changeActiveProduct(menuItem, cardData.id));

    return (
        <ProductCard
            data={cardData} 
            selectedSize={selectedSize}
            selectedGift={selectedGift}
            url={url}
            fastCategories={fastCategories}
            onClickButton={onClickButton}
            onClickCheckbox={onClickCheckbox}
            onClickDropdown={onClickDropdown}
            onClickOrder={onClickOrder}
            onClickPlusCount={onClickPlusCount}
            onClickMinusCount={onClickMinusCount}
            onClickProduct={onClickProduct}
        />
    )
};

ProductCardContainer.propTypes = {
    cardData: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
};

export default ProductCardContainer;

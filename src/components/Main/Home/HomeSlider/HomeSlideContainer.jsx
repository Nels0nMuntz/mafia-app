import React from 'react'
import { useDispatch } from 'react-redux';

// import { toggleHomeProductSize, changeHomeProductSize, changeHomeProductGift, changeHomeProductState } from '../../../../redux/home-reducer';
import { toggleProductSize, changeProductSize, changeProductGift, changeProductState } from '../../../../redux/catalog-reducer';
import { addProduct, changeProductGiftCart, increaseCount, decreaseCount, removeProduct } from '../../../../redux/cart-reducer';
import ProductCard from './../../ProductsCatalog/ProductCard';


const HomeSlideContainer = ({ data, isProductOrdered }) => {

    const isSelected = data.isSelected && data.uniqueId;
    const selectedSize = data.sizes.find(item => item.isSelected);
    const selectedGift = data.gifts.find(item => item.isSelected);
    const dispatch = useDispatch();
    const onClickButton = event => {
        const sizeId = +(event.target.dataset.sizeId);
        if(sizeId === selectedSize.id) return;
        dispatch(changeProductSize(data.menuItem, data.productId, sizeId));
    };
    const onClickCheckbox = () => dispatch(toggleProductSize(data.menuItem, data.productId));
    const onClickDropdown = value => {
        if(value === selectedGift.content) return;
        const giftId = data.gifts.find(item => item.content === value).id;
        dispatch(isSelected ? changeProductGiftCart(data.uniqueId, giftId) : changeProductGift(data.menuItem, data.productId, giftId));
    };
    const onClickOrder = () => {
        dispatch(changeProductState(data.menuItem, data.productId, true));
        dispatch(addProduct(data));
    };
    const onClickPlusCount = () => dispatch(increaseCount(data.uniqueId));
    const onClickMinusCount = () => {
        if(data.count > 1){
            dispatch(decreaseCount(data.uniqueId));
        }else{
            !isProductOrdered && dispatch(changeProductState(data.menuItem, data.productId, false));
            dispatch(removeProduct(data.uniqueId));
        }
    };

    return (
        <ProductCard
            data={data}
            url={`/menu-dostavki/${data.menuItem}`}
            selectedSize={selectedSize}
            selectedGift={selectedGift}
            onClickButton={onClickButton}
            onClickCheckbox={onClickCheckbox}
            onClickDropdown={onClickDropdown}
            onClickOrder={onClickOrder}
            onClickPlusCount={onClickPlusCount}
            onClickMinusCount={onClickMinusCount}
            onePrice={true}
        />
    )
};

export default HomeSlideContainer;
// export default React.memo(
//     HomeSlideContainer,
//     (prevProps, nextProps) => {
//         if(prevProps.isProductOrdered || nextProps.isProductOrdered){
//             console.log(prevProps);
//             console.log(nextProps);
//         }
//         return isEqual(prevProps, nextProps)
//     }
// )

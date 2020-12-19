import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import { addProduct } from '../../../redux/cart-reducer';
import { increaseCount, decreaseCount, removeProduct } from '../../../redux/cart-reducer';
import ProductCard from './ProductCard';
import { createSelector } from 'reselect';


const ProductCardContainer = ({ cardData, url }) => {

    // console.log('ProductCardContainer');

    const TOGGLE_SIZE = 'TOGGLE_SIZE';
    const SET_GIFT = 'SET_GIFT';

    const getUniqueId = () => cardData.title.replace(" ", "").split("").reduce((acc, char) => char.charCodeAt(0) + acc, '');

    const initialState = {
        id: cardData.id,
        uniqueId: getUniqueId(),
        title: cardData.title,
        description: cardData.description,
        bigImageUrl: cardData.images.bigImageUrl,
        smallImageUrl: cardData.images.smallImageUrl,
        category: cardData.category,
        hasTwoSizes: cardData.sizes.length === 2,
        hasGifts: !!cardData.gifts.length,
        gifts: cardData.gifts,
        tags: cardData.tags,
        selectedSize: {
            weight: cardData.sizes[0].weight,
            price: cardData.sizes[0].price,
            discount: cardData.sizes[0].discount,
        },
        selectedGift: cardData.gifts[0],
        selectedAddition: null,
        checkbox: false,
        prevState: null,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case TOGGLE_SIZE:
                return {
                    ...state,
                    selectedSize: {
                        weight: action.payload.weight,
                        price: action.payload.price,
                        discount: action.payload.discount,
                    },
                    checkbox: action.payload.checkbox,
                    prevState: action.payload.className,
                };
            case SET_GIFT:
                return { ...state, selectedGift: action.payload };
            default:
                return state;
        }
    };

    const [state, localDispatch] = React.useReducer(reducer, initialState);
    const dispatch = useDispatch()

    const toggleSizeAC = (weight, price, discount, checkbox, className) => {
        return {
            type: TOGGLE_SIZE,
            payload: {
                weight,
                price,
                discount,
                checkbox,
                className
            }
        }
    };

    const setGiftAC = value => ({ type: SET_GIFT, payload: value });

    const onClickButton = event => {
        const target = event.target;
        const className = target.className;
        if (state.prevState === className) return;
        if (target.dataset.default) {
            localDispatch(toggleSizeAC(cardData.sizes[0].weight, cardData.sizes[0].price, cardData.sizes[0].discount, false, className));
        } else {
            localDispatch(toggleSizeAC(cardData.sizes[1].weight, cardData.sizes[1].price, cardData.sizes[1].discount, true, className));
        }
    };

    const onClickCheckbox = () => localDispatch(toggleSizeAC(
        cardData.sizes[+(!state.checkbox)].weight,
        cardData.sizes[+(!state.checkbox)].price,
        cardData.sizes[+(!state.checkbox)].discount,
        !state.checkbox
    ));

    // const cartList = useSelector(
    //     state => state.cart.selected,
    //     (curr, prev) => {
    //         /** It'l be work when by decreasing count of some item, this item was deleted. */
    //         // if(!curr.length && prev.length) return false;
    //         if(!curr.length) return false;
    //         /** I have to return "true" to avoid rerender of elements which aren't in the Cart. This will be work by default. */
    //         return !curr.find(elem => elem.id === state.uniqueId);
    //     }
    // );
    const cartList = useSelector(createSelector(
        state => state.cart.selected,
        
    ))
    const cartProduct = cartList.find(elem => elem.id === state.uniqueId);

    const onClickOrder = () => {
        return cartProduct ? undefined : dispatch(addProduct(state));
    }
    const onClickDropdown = value => value === state.selectedGift ? undefined : localDispatch(setGiftAC(value));
    const onClickPlusCount = () => dispatch(increaseCount(state.uniqueId));
    const onClickMinusCount = () => cartProduct.count > 1 ? dispatch(decreaseCount(state.uniqueId)) : dispatch(removeProduct(state.uniqueId));


    return (
        <ProductCard
            state={state}
            url={url}
            cartProduct={cartProduct}
            onClickButton={onClickButton}
            onClickCheckbox={onClickCheckbox}
            onClickOrder={onClickOrder}
            onClickDropdown={onClickDropdown}
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

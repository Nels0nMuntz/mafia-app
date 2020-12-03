import React from 'react'
import classnames from 'classnames'

import GiftDropdown from './../../../libs-components/GiftDropdown/GiftDropdown';

import './../Home/HomeSlider/HomeSlider.scss'


const ProductCard = ({ cardData }) => {

    const TOGGLE_SIZE = 'TOGGLE_SIZE';
    const SET_GIFT = 'SET_GIFT';

    const initialState = {
        title: cardData.title,
        description: cardData.description,
        imageUrl: cardData.imageUrl,
        hasTwoSizes: cardData.sizes.length === 2,
        hasGifts: !!cardData.gifts.length,
        gifts: cardData.gifts,
        selectedSize: {
            weight: cardData.sizes[0].weight,
            price: cardData.sizes[0].price,
        },
        selectedGift: cardData.gifts[0],
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

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const toggleSizeAC = (weight, price, checkbox, className) => {
        return {
            type: TOGGLE_SIZE,
            payload: {
                weight,
                price,
                checkbox,
                className
            }
        }
    };

    const setGiftAC = value => ({ type: SET_GIFT, payload: value });

    const onClickButton = event => {
        const target = event.target;
        const className = target.className;
        if(state.prevState === className) return;
        if (target.dataset.default) {
            dispatch(toggleSizeAC(cardData.sizes[0].weight, cardData.sizes[0].price, false, className));
        } else {
            dispatch(toggleSizeAC(cardData.sizes[1].weight, cardData.sizes[1].price, true, className));
        }
    };

    const onClickCheckbox = () => dispatch(toggleSizeAC(cardData.sizes[+(!state.checkbox)].weight, cardData.sizes[+(!state.checkbox)].price, !state.checkbox));

    const onClickDropdown = value => value === state.selectedGift ? undefined : dispatch(setGiftAC(value));    


    return (
        <article className="products_catalog_item_wrapper">
            <div className="homeSlider__item item-homeSlider">
                <div className="item-homeSlider__content">
                    <img src={state.imageUrl} alt='' />
                    <div className="item-homeSlider__info">
                        <h3>{state.title}</h3>
                        <div className="item-homeSlider__weight-block">
                            <div className="item-homeSlider__weight">{state.selectedSize.weight}</div>
                            {state.hasTwoSizes ? (
                                <div className="item-homeSlider__swicher swicher-homeSlider">
                                    <span
                                        className="size-btn-1"
                                        data-default
                                        onClick={onClickButton}
                                    >Средняя</span>
                                    <div
                                        data-checkbox
                                        className={classnames(
                                            "swicher-homeSlider__checkbox",
                                            state.checkbox && 'checked'
                                        )}
                                        onClick={onClickCheckbox}
                                    >
                                        <span />
                                    </div>
                                    <span
                                        className="size-btn-2"
                                        onClick={onClickButton}
                                    >Большая</span>
                                </div>
                            ) : null}
                        </div>
                        <p className="item-homeSlider__descr">{state.description}</p>
                        <div className="item-homeSlider__price-gift">
                            <div className="item-homeSlider__price">{`${state.selectedSize.price} грн.`}</div>
                            <div className="item-homeSlider__gift-block gift-block">
                                {state.hasGifts ? (
                                    <GiftDropdown
                                        list={state.gifts}
                                        value={state.selectedGift}
                                        callback={onClickDropdown}
                                    />
                                ) : null}
                            </div>
                        </div>
                        <div className="item-homeSlider__order">
                            <button
                                className="item-homeSlider__btn"
                            // onClick={() => console.log(slideData)}
                            >Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard

import React from 'react'
import classnames from 'classnames'

import GiftDropdown from './../../common/GiftDropdown/GiftDropdown';

import './../Home/HomeSlider/HomeSlider.scss'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


const ProductCard = ({ cardData, url }) => {

    const TOGGLE_SIZE = 'TOGGLE_SIZE';
    const SET_GIFT = 'SET_GIFT';

    const initialState = {
        id: cardData.id,
        title: cardData.title,
        description: cardData.description,
        imageUrl: cardData.images.bigImageUrl,
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

    const [state, dispatch] = React.useReducer(reducer, initialState);

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
            dispatch(toggleSizeAC(cardData.sizes[0].weight, cardData.sizes[0].price, cardData.sizes[0].discount, false, className));
        } else {
            dispatch(toggleSizeAC(cardData.sizes[1].weight, cardData.sizes[1].price, cardData.sizes[1].discount, true, className));
        }
    };

    const onClickCheckbox = () => dispatch(toggleSizeAC(
        cardData.sizes[+(!state.checkbox)].weight,
        cardData.sizes[+(!state.checkbox)].price,
        cardData.sizes[+(!state.checkbox)].discount,
        !state.checkbox
    ));

    const onClickDropdown = value => value === state.selectedGift ? undefined : dispatch(setGiftAC(value));

    // const onClickOrder = () => {
    //     const order = {
    //         id: state.id + 
    //     }
    // }

    return (
        <article className="products_catalog_item_wrapper">
            <div className="homeSlider__item item-homeSlider">
                <div className="item-homeSlider__content">
                    <div className="product-tag__wrapper">
                        {state.tags && state.tags.map(({ id, type, content }) => (
                            <div
                                key={id}
                                className={`product-tag ${type === 'primary' ? 'primary-product-tag' : ''} ${type === 'secondary' ? 'secondary-product-tag' : ''}`}
                            >
                                <span>{content}</span>
                            </div>
                        ))}
                    </div>
                    <Link to={`${url}/product/${state.id}?fast=${state.category}`} className='item-homeSlider__link'>
                        <img src={state.imageUrl} alt='' />
                    </Link>
                    <div className="item-homeSlider__info">
                        <Link to={`${url}/product/${state.id}?fast=${state.category}`}>
                            <h3>{state.title}</h3>
                        </Link>
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
                            <div className={`item-homeSlider__price ${state.selectedSize.discount ? 'with-discount' : ''}`}>
                                {state.selectedSize.discount ? <span className="item-homeSlider__price-discount">{state.selectedSize.discount} грн</span> : null}
                                <span className="item-homeSlider__price-ordinary">{`${state.selectedSize.price} грн`}</span>
                            </div>
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
                                // onClick={onClickOrder}
                            >Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
};

ProductCard.propTypes = {
    cardData: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
};

export default ProductCard;

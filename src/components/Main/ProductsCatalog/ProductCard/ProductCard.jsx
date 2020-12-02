import React from 'react'
import classnames from 'classnames'

import GiftDropdown from './../../../../libs-components/GiftDropdown/GiftDropdown';

import './../../Home/HomeSlider/HomeSlider.scss'

// import imageUrl from './../../../../assets/images/pizza.jpeg'


/**
 * State each of cards encoded in binary notation
 * Every certain state has its own code in binary:
 * ___________________________________
 * | Two sizes              | 0000001 |
 * | Middle size            | 0000010 |
 * | Big size               | 0000100 |
 * | The presence of a gift | 0001000 |
 * | No gift                | 0010000 |
 * | Gift 1                 | 0100000 |
 * | Discount               | 1000000 |
 * ___________________________________
 * 
 * The way to know either card contains some of feature or not 
 * is comparing one of these code and individual code of each card,
 * wich will be define below
 **/


const ProductCard = ({ cardData }) => {

    const {title, description, imageUrl, gifts, sizes} = cardData;

    const IS_TWQ_SIZES =    1;
    const MIDDLE_SIZE =     2;
    const BIG_SIZE =        4;
    const HAS_GIFT =        8;
    const NO_GIFT =         16;
    const GIFT_1 =          32;
    const DISCOUNT =        64;

    const SET_MIDDLE_SIZE = 'SET_MIDDLE_SIZE';
    const SET_BIG_SIZE = 'SET_BIG_SIZE';
    const SET_GIFT = 'SET_GIFT';
    const SET_NO_GIFT = 'SET_NO_GIFT';

    const getCode = (size = MIDDLE_SIZE, gift = GIFT_1) => {
        let code = 0;
        if (cardData.sizes.length === 2) code += IS_TWQ_SIZES;
        code += size;
        if (cardData.gifts.length){
            code += HAS_GIFT;
            code += gift;        
        };
        if (cardData.sizes[0].discount) code += DISCOUNT;
        return code;
    };

    const initialState = {cardCode: getCode()};

    const reducer = (state, action) => {
        switch (action.type) {
            // case SET_MIDDLE_SIZE:
            //     return {...state, cardCode: getCode(MIDDLE_SIZE)};
            // case SET_BIG_SIZE:
            //     return {...state, cardCode: getCode(BIG_SIZE)};
            // case SET_GIFT:
            //     return {cardCode: getCode(GIFT_1)};
            // case SET_NO_GIFT:
            //     return {cardCode: getCode(NO_GIFT)};
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(reducer, initialState);

    // const cardCode = getCode();
    // console.log(cardData.title + ' ' + cardCode);
    // console.log(cardCode & BIG_SIZE);

    return (
        <div className="products_catalog_item_wrapper">
            <div className="homeSlider__item item-homeSlider">
                <div className="item-homeSlider__content">
                    <img src={imageUrl} alt='' />
                    <div className="item-homeSlider__info">
                        <h3>{title}</h3>
                        <div className="item-homeSlider__weight-block">
                        <div className="item-homeSlider__weight">{state.cardCode & MIDDLE_SIZE ? sizes[0].weight : sizes[1].weight}</div>
                        {state.cardCode & IS_TWQ_SIZES ? (
                            <div className="item-homeSlider__swicher swicher-homeSlider">
                                <span
                                    data-value={sizes[0].value}
                                    onClick={dispatch({type: SET_MIDDLE_SIZE})}
                                >{sizes[0].value}</span>
                                <div
                                    className={classnames(
                                        "swicher-homeSlider__checkbox",
                                        // slideData.checkboxState && 'checked'
                                    )}
                                    onClick={state.cardCode & MIDDLE_SIZE ? dispatch({type: SET_BIG_SIZE}) : dispatch({type: SET_MIDDLE_SIZE})}
                                >
                                    <span />
                                </div>
                                <span
                                    data-value={sizes[1].value}
                                    onClick={dispatch({type: SET_BIG_SIZE})}
                                >{sizes[1].value}</span>
                            </div>
                        ) : null}
                    </div>
                    <p className="item-homeSlider__descr">{description}</p>
                        <div className="item-homeSlider__price-gift">
                        <div className="item-homeSlider__price">{`${state.cardCode & MIDDLE_SIZE ? sizes[0].price : sizes[1].price} грн.`}</div>
                        <div className="item-homeSlider__gift-block gift-block">
                            {state.cardCode & HAS_GIFT ? (
                                <GiftDropdown
                                    list={gifts}
                                    value={state.cardCode & GIFT_1 ? gifts[0] : gifts[1]}
                                    // callback={onClickDropdown}
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
        </div>
    )
}

export default ProductCard

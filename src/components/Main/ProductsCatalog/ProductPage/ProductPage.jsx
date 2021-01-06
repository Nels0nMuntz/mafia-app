import React from 'react'
import { PropTypes } from 'prop-types';
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import withBreadcrumbs from './../../../HOC/withBreadcrumbs';
import GiftDropdown from './../../../common/GiftDropdown/GiftDropdown';
import Swicher from './../../../common/Swicher/Swicher';
import { addProduct, decreaseCount, increaseCount, removeProduct, setAdditions } from '../../../../redux/cart-reducer';
import { changeReadyToRenderErrors, changeErrorVisibility } from './../../../../redux/checkout-reducer'
import AdditionItem from './AdditionsItem/AdditionsItem';

import style from './ProductPage.module.scss'
import deliveyImgUrl_1 from './../../../../assets/images/delivery-icon1.png'
import deliveyImgUrl_2 from './../../../../assets/images/delivery-icon2.png'


const ProductPage = ({ BreadcrumbsComponent, product }) => {

    const getUniqueId = cardData => cardData.title.replace(" ", "").split("").reduce((acc, char) => char.charCodeAt(0) + acc, '');

    const SET_SIZE = 'SET_SIZE';
    const SET_GIFT = 'SET_GIFT';
    const SET_ADDITIONS = 'SET_ADDITIONS';

    const initialState = {
        id: product.id,
        uniqueId: getUniqueId(product),
        title: product.title,
        description: product.description,
        smallImageUrl: product.images.smallImageUrl,
        sizes: product.sizes,
        gifts: product.gifts,
        tags: product.tags,
        bonuses: product.bonuses,
        additions: [
            ...product.additionals.map(item => ({ ...item, selected: false }))
        ],
        hasTwoSizes: product.sizes.length === 2,
        hasDiscount: !!product.sizes[0].discount,
        hasGifts: !!product.gifts.length,
        hasBonuses: !!product.bonuses.length,
        hasAdditions: !!product.additionals.length,
        checkbox: false,
        prevButton: null,
        selectedSize: {
            weight: product.sizes[0].weight,
            price: product.sizes[0].price,
            discount: product.sizes[0].discount,
        },
        selectedGift: product.gifts[0],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case SET_SIZE:
                return {
                    ...state,
                    selectedSize: {
                        weight: action.payload.weight,
                        price: action.payload.price,
                        discount: action.payload.discount,
                    },
                    checkbox: action.payload.checkbox,
                    prevButton: action.payload.button,
                };
            case SET_GIFT:
                return { ...state, selectedGift: action.payload };
            case SET_ADDITIONS:
                return { ...state, additions: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatchLocal] = React.useReducer(reducer, initialState);
    const setGiftAC = value => ({ type: SET_GIFT, payload: value });
    const setSizeAC = (weight, price, discount, checkbox, button) => {
        return {
            type: SET_SIZE,
            payload: {
                weight,
                price,
                discount,
                checkbox,
                button
            }
        }
    };
    const changeAdditionsAC = data => ({ type: SET_ADDITIONS, payload: data })
    const onClickDropdown = value => value === state.selectedGift ? undefined : dispatchLocal(setGiftAC(value));
    const onClickButton = event => {
        const target = event.target;
        const button = target.className;
        if (state.prevButton === button) return;
        if (target.dataset.default) {
            dispatchLocal(setSizeAC(state.sizes[0].weight, state.sizes[0].price, state.sizes[0].discount, false, button));
        } else {
            dispatchLocal(setSizeAC(state.sizes[1].weight, state.sizes[1].price, state.sizes[1].discount, true, button));
        }
    };
    const onClickCheckbox = () => dispatchLocal(setSizeAC(
        state.sizes[+(!state.checkbox)].weight,
        state.sizes[+(!state.checkbox)].price,
        state.sizes[+(!state.checkbox)].discount,
        !state.checkbox
    ));
    const cartProduct = useSelector(createSelector(
        state => state.cart.selected,
        selected => selected.find(elem => elem.id === state.uniqueId)
    ));
    const dispatchGlobal = useDispatch()
    const onClickOrder = () => cartProduct ? undefined : dispatchGlobal(addProduct(state));
    const onClickPlusCount = () => dispatchGlobal(increaseCount(state.uniqueId));
    const onClickMinusCount = () => cartProduct.count > 1 ? dispatchGlobal(decreaseCount(state.uniqueId)) : dispatchGlobal(removeProduct(state.uniqueId));
    const changeAdditions = id => {
        if(cartProduct){
            const data = state.additions.map(item => item.id === id ? {...item, selected: !item.selected} : item);
            dispatchLocal(changeAdditionsAC(data))
            dispatchGlobal(setAdditions(state.uniqueId, data))
        }
    };


    return (
        <section className={style.productPage}>
            <div className={style.breadcrumbs_container}>
                <BreadcrumbsComponent />
            </div>
            <div className={style.productPage__wrapper}>
                <article className={style.productPage__content}>
                    <div className={`${style.productPage__img} productPage__img`}>
                        <img src={state.smallImageUrl} alt="" />
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
                    </div>
                    <div className={style.productPage__info}>
                        <h2>{state.title}</h2>
                        <div className={style.productPage__weight_block}>
                            <div className={style.productPage__weight}>{state.selectedSize.weight}</div>
                            {state.hasTwoSizes && (
                                <Swicher
                                    onClickButtonHandler={onClickButton}
                                    onClickCheckboxHandler={onClickCheckbox}
                                    isChecked={state.checkbox}
                                />
                            )}
                        </div>
                        <div className={style.productPage__description}>
                            {state.description.map((sentence, index) => <p key={index}>{sentence}</p>)}
                        </div>
                        <div className={style.productPage__footer}>
                            {state.hasGifts && (
                                <div className={`${style.productPage__gift} product-page__gift`}>
                                    <GiftDropdown
                                        list={state.gifts}
                                        value={state.selectedGift}
                                        callback={onClickDropdown}
                                    />
                                </div>
                            )}
                            <div className={style.productPage__price_block}>
                                <div className={style.productPage__price}>
                                    {state.hasDiscount && <span className={style.productPage__price_discount}>{state.selectedSize.discount} грн</span>}
                                    <span className={`${style.productPage__price_ordinary} ${state.hasDiscount ? style.width_discount : ''}`}>{state.selectedSize.price} грн</span>
                                </div>
                                <div className={style.productPage__order_btn}>
                                    <button
                                        className={classnames(
                                            'item-homeSlider__btn',
                                            'item-homeSlider__btn-mini',
                                        )}
                                        onClick={onClickOrder}
                                    >{cartProduct ? (
                                        <div className="item-homeSlider__btn_ordered">
                                            <div
                                                className={classnames(
                                                    "order-manage",
                                                    "order-minus",
                                                )}
                                                onClick={onClickMinusCount}
                                            >
                                                <svg width="16" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="2" x2="20" y2="2" stroke="#E1B787" strokeWidth="4" />
                                                </svg>
                                            </div>
                                            <div className="order_count">{cartProduct.count}</div>
                                            <div
                                                className="order-manage order-plus"
                                                onClick={onClickPlusCount}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="8" x2="8" y2="16" stroke="#E1B787" strokeWidth="3" />
                                                    <line y1="8" x2="16" y2="8" stroke="#E1B787" strokeWidth="3" />
                                                </svg>
                                            </div>
                                        </div>
                                    ) : 'Заказать'}</button>
                                </div>
                            </div>
                            {state.hasBonuses && (
                                <div className={style.productPage__delivery}>
                                    {state.bonuses.map(({ id, type, content }) => (
                                        <div className={style.productPage__delivery_item} key={id}>
                                            <span><img src={type === 'delivery' ? deliveyImgUrl_1 : deliveyImgUrl_2} alt="" /></span>
                                            <span>{content}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
                <aside className={style.productPage__additional}>
                    {state.hasAdditions && (
                        <div className={style.productPage__additional_inner}>
                            <h3>Дополнения</h3>
                            <div className={style.productPage__additional_container}>
                                {state.additions.map((item, index) => (
                                    <AdditionItem
                                        key={index}
                                        additionData={item}
                                        disabled={!cartProduct}
                                        changeAdditions={changeAdditions}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </section>
    )
};

ProductPage.propTypes = {
    BreadcrumbsComponent: PropTypes.elementType.isRequired,
    product: PropTypes.object.isRequired,
}

export default withBreadcrumbs(ProductPage)

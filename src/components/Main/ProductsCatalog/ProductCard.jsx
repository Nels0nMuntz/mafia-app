import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom';

import GiftDropdown from '../../common/GiftDropdown/GiftDropdown';

import './../Home/HomeSlider/HomeSlider.scss'


const ProductCard = ({state, url, fastCategories, cartProduct, onClickDropdown, onClickButton, onClickCheckbox, onClickOrder, onClickPlusCount, onClickMinusCount }) => {

    console.log(fastCategories);

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
                    <Link to={`${fastCategories.length ? `${url}/product/${state.id}?fast=${state.category}` : `${url}/product/${state.id}`}`} className='item-homeSlider__link'>
                    {/* <Link to={`${url}/product/${state.id}?fast=${state.category}`} className='item-homeSlider__link'> */}
                        <img src={state.bigImageUrl} alt='' />
                    </Link>
                    <div className="item-homeSlider__info">
                        <Link to={`${fastCategories.length ? `${url}/product/${state.id}?fast=${state.category}` : `${url}/product/${state.id}`}`}>
                        {/* <Link to={`${url}/product/${state.id}?fast=${state.category}`}> */}
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
                                className={classnames(
                                    'item-homeSlider__btn',
                                    cartProduct && 'in-cart'
                                )}
                                onClick={onClickOrder}
                            >{cartProduct ? (
                                <div className="item-homeSlider__btn_ordered">
                                    <div
                                        className={classnames(
                                            "order-manage",
                                            "order-minus",
                                            // cartProduct.count === 1 && "disabled"
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
                </div>
            </div>
        </article>
    )
}

export default ProductCard

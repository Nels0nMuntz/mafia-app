import React from 'react'

import style from './PopupCart.module.scss'


const PopupCartItem = ({ id, title, count, price, gift, imageUrl, additions, removeItem, increaseCountItem, decreaseCountItem, removeAddition }) => {

    const onClickRemove = () => removeItem(id);
    const onClickDecreaseCount = () => count > 1 ? decreaseCountItem(id) : removeItem(id);
    const onClickIncreaseCount = () => increaseCountItem(id);

    return (
        <div
            className={`${style.popup_cart__item} popup_cart__item`}
            data-product-id={id}
        >
            <div className={`${style.item__raw} ${style.item__raw_product}`}>
                <div className={style.item__img}>
                    <img src={imageUrl} alt="" />
                </div>
                <div className={style.item__info}>
                    <h3>{title}</h3>
                    <p>{gift}</p>
                    <div className={style.item__counter}>
                        <div
                            className="order-manage order-minus"
                            onClick={onClickDecreaseCount}
                        >
                            <svg width="16" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="2" x2="20" y2="2" stroke="#E1B787" strokeWidth="4" />
                            </svg>
                        </div>
                        <div className={style.counter_count}>{count}</div>
                        <div
                            className="order-manage order-plus"
                            onClick={onClickIncreaseCount}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="8" x2="8" y2="16" stroke="#E1B787" strokeWidth="3" />
                                <line y1="8" x2="16" y2="8" stroke="#E1B787" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                    <div className={style.item__price}>{price} грн</div>
                </div>
                <div
                    className={`${style.item__remove} popup-cart-item__remove`}
                    onClick={onClickRemove}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <g id="close">
                            <circle id="Ellipse 1" cx="14" cy="14" r="13.5" fill="#E9DAB7" stroke="#E9DAB7" />
                            <line id="Line 2" x1="6.92893" y1="21.0711" x2="21.0711" y2="6.92893" stroke="white" strokeWidth="2" />
                            <line id="Line 1" x1="6.92893" y1="6.92893" x2="21.0711" y2="21.0711" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        </g>
                    </svg>
                </div>
            </div>
            {additions.map(({ id: additionId, title, price, imgUrl, selected }) => selected && (
                <div className={`${style.item__raw} ${style.item__raw_addition}`} key={additionId}>
                    <div className={style.item__img}>
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className={style.item__info}>
                        <h3>{title}</h3>
                        <div className={style.item__price}>{price} грн</div>
                    </div>
                    <div
                        className={`${style.item__remove} popup-cart-item__remove`}
                        onClick={() => removeAddition(id, additionId)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <g id="close">
                                <circle id="Ellipse 1" cx="14" cy="14" r="13.5" fill="#E9DAB7" stroke="#E9DAB7" />
                                <line id="Line 2" x1="6.92893" y1="21.0711" x2="21.0711" y2="6.92893" stroke="white" strokeWidth="2" />
                                <line id="Line 1" x1="6.92893" y1="6.92893" x2="21.0711" y2="21.0711" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            </g>
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default PopupCartItem;

import React from 'react'

import style from './Checkout.module.scss'

const CheckoutItem = ({ id, title, imageUrl, gift, count, price, sizeValue, additions, onDecreaseCount, onIncreaseCount, onRemoveProduct }) => {

    const onClickIncreaseCount = () => onIncreaseCount(id);
    const onClickDecreaseCount = () => count > 1 ? onDecreaseCount(id) : onRemoveProduct(id);
    const onClickRemoveProduct = () => onRemoveProduct(id);

    return (
        <article className={style.checkout_list__row} key={id}>
            <div className={style.checkout_list__row_wrapper}>
                <div className={style.checkout_list__title}>
                    <img src={imageUrl} alt="" />
                    <div>
                        <h3>{title}{sizeValue && <span> ({sizeValue})</span>}</h3>
                        <p>{gift}</p>
                    </div>
                </div>
                <div className={style.checkout_list__price}>{price} грн</div>
                <div className={style.checkout_list__count}>
                    <div
                        className="order-manage order-minus"
                        onClick={onClickDecreaseCount}
                    >
                        <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2H14" stroke="#E9DAB7" strokeWidth="3" />
                        </svg>
                    </div>
                    <div>{count}</div>
                    <div
                        className="order-manage order-plus"
                        onClick={onClickIncreaseCount}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7H14" stroke="#E9DAB7" strokeWidth="3" />
                            <path d="M7 0V14" stroke="#E9DAB7" strokeWidth="3" />
                        </svg>
                    </div>
                </div>
                <div className={style.checkout_list__sum}>{price * count} грн</div>
                <div
                    className={style.checkout_list__close}
                    onClick={onClickRemoveProduct}
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
            {!!additions.length && additions.map(({ id, title, price, imgUrl, isSelected }) => isSelected && (
                <div className={style.checkout_list__row_wrapper} key={id}>
                    <div className={style.checkout_list__title}>
                        <img src={imgUrl} alt="" />
                        <div>
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className={style.checkout_list__sum}>{price * count} грн</div>
                    <div
                        className={style.checkout_list__close}
                    // onClick={onClickRemoveProduct}
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
        </article>
    )
};

export default CheckoutItem;

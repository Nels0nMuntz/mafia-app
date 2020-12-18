import React from 'react'

import style from './PopupCart.module.scss'


const PopupCartItem = ({ id, title, count, price, gift, imageUrl, removeProduct }) => {

    const onRemoveProduct = () => removeProduct(id);
    
    return (
        <div className={style.popup_cart__item}>
            <div className={style.item__img}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={style.item__info}>
                <h3>{title}</h3>
                <p>{gift}</p>
                <div className={style.item__counter}>
                    <svg width="16" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="2" x2="20" y2="2" stroke="#E1B787" strokeWidth="4" />
                    </svg>
                    <div className={style.counter_count}>{count}</div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="8" x2="8" y2="16" stroke="#E1B787" strokeWidth="3" />
                        <line y1="8" x2="16" y2="8" stroke="#E1B787" strokeWidth="3" />
                    </svg>
                </div>
                <div className={style.item__price}>{price} грн</div>
            </div>
            <div
                className={style.item__remove}
                // onClick={onRemoveProduct}
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="13.5" transform="rotate(-45 20 20)" fill="#E9DAB7" stroke="#E9DAB7" />
                    <line x1="12.9289" y1="27.0711" x2="27.0711" y2="12.9289" stroke="white" strokeWidth="2" />
                    <line x1="12.9289" y1="12.9289" x2="27.0711" y2="27.0711" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
};

export default PopupCartItem;

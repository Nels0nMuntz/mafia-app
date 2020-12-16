import React from 'react'
import classnames from 'classnames'

import style from './PopupCart.module.scss'
import { useSelector } from 'react-redux';

const PopupCart = () => {

    const isOpen = useSelector(state => state.cart.isPopupCartOpen);

    return (
        <div 
            className={classnames(
                style.popup_cart__overlay,
                isOpen && style.active
        )}>
            <div className={style.popup_cart__wrapper}>
                <h2>popup cart</h2>
            </div>
        </div>
    )
}

export default PopupCart;

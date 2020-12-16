import React from 'react'
import classnames from 'classnames'

import style from './PopupCart.module.scss'
import popupCartImg from './../../../assets/images/popup-cart-img.jpeg'
import { PropTypes } from 'prop-types';


const PopupCart = ({ isOpen, setNodeRef }) => {

    const node = React.useRef();

    React.useEffect(() => setNodeRef(node));

    return (
        <div
            className={classnames(
                style.popup_cart__overlay,
                isOpen && style.active
            )}
        >
            <div
                className={style.popup_cart__wrapper}
                ref={node}
            >
                <div className={style.popup_cart__header}>
                    <h2>Корзина</h2>
                </div>
                <div className={style.popup_cart__body}>
                    <div className={style.popup_cart__item}>
                        <div className={style.item__img}>
                            <img src={popupCartImg} alt="" />
                        </div>
                        <div className={style.item__info}>
                            <h3>Цезарь</h3>
                            <p>Gift</p>
                            <div className={style.item__counter}>
                                <svg width="16" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="2" x2="20" y2="2" stroke="#E1B787" strokeWidth="4" />
                                </svg>
                                <div className={style.counter_count}>2</div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="8" x2="8" y2="16" stroke="#E1B787" strokeWidth="3" />
                                    <line y1="8" x2="16" y2="8" stroke="#E1B787" strokeWidth="3" />
                                </svg>
                            </div>
                            <div className={style.item__price}>135 грн</div>
                        </div>
                        <div className={style.item__remove}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="13.5" transform="rotate(-45 20 20)" fill="#E9DAB7" stroke="#E9DAB7" />
                                <line x1="12.9289" y1="27.0711" x2="27.0711" y2="12.9289" stroke="white" strokeWidth="2" />
                                <line x1="12.9289" y1="12.9289" x2="27.0711" y2="27.0711" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={style.popup_cart__footer}>
                    <div className={style.popup_cart__footer_price}>
                        <span>Сумма:</span>
                        <span>244 грн</span>
                    </div>
                    <button
                        className="item-homeSlider__btn popup_cart__btn"
                    >Оформить</button>
                </div>
            </div>
        </div>
    )
};

PopupCart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setNodeRef: PropTypes.func.isRequired,
};

export default PopupCart;

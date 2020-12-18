import React from 'react'
import classnames from 'classnames'
import { PropTypes } from 'prop-types';

import PopupCartItem from './PopupCartItem';
import { removeProduct } from '../../../redux/cart-reducer';

import style from './PopupCart.module.scss'
import { useDispatch } from 'react-redux';


const PopupCart = ({ list, totalPrice, isOpen, setNodeRef }) => {

    console.log('PopupCart');

    const dispatch = useDispatch();
    const node = React.useRef();
    const removeProductHandler = id => dispatch(removeProduct(id));

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
                    {list.map(({ id, title, count, price, gift, imageUrl }) => (
                        <PopupCartItem
                            key={id}
                            id={id}
                            title={title}
                            count={count}
                            price={price}
                            gift={gift}
                            imageUrl={imageUrl}
                            removeProduct={removeProductHandler}
                        />
                    ))}
                </div>
                <div className={style.popup_cart__footer}>
                    <div className={style.popup_cart__footer_price}>
                        <span>Сумма:</span>
                        <span>{totalPrice} грн</span>
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
    list: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setNodeRef: PropTypes.func.isRequired,
};

export default PopupCart;

import React from 'react'
import classnames from 'classnames'
import { PropTypes } from 'prop-types';

import PopupCartItem from './PopupCartItem';

import style from './PopupCart.module.scss'
import { Link } from 'react-router-dom';


const PopupCart = ({ list, totalPrice, isOpen, setNodeRef, removeItem, increaseCountItem, decreaseCountItem, closePopupCart, removeAddition }) => {

    const node = React.useRef();
    const onClosePopupCart = () => closePopupCart();

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
                    {list.map(({ uniqueId, title, count, sizes, gifts, images, additions, hasTwoSizes }, i) => {
                        const selectedSize = sizes.find(item => item.isSelected);
                        const selectedGift = gifts.find(item => item.isSelected) || '';
                        return (
                            <PopupCartItem
                                key={uniqueId}
                                uniqueId={uniqueId}
                                title={title}
                                sizeValue={hasTwoSizes ? selectedSize.value : ''}
                                count={count}
                                price={selectedSize.discount || selectedSize.price}
                                gift={selectedGift.content}
                                imageUrl={images.smallImageUrl}
                                additions={additions}
                                removeItem={removeItem}
                                increaseCountItem={increaseCountItem}
                                decreaseCountItem={decreaseCountItem}
                                removeAddition={removeAddition}
                            />
                        )
                    })}
                </div>
                <div className={style.popup_cart__footer}>
                    <div className={style.popup_cart__footer_price}>
                        <span>Сумма:</span>
                        <span>{totalPrice} грн</span>
                    </div>
                    <Link to='/checkout'>
                        <button
                            className="item-homeSlider__btn popup_cart__btn"
                            onClick={onClosePopupCart}
                        >
                            Оформить
                        </button>
                    </Link>
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

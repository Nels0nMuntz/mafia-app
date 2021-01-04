import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { changePopupCartState, removeProduct, increaseCount, decreaseCount } from '../../../redux/cart-reducer';
import PopupCart from './PopupCart';


const PopupCartContainer = () => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.cart.isPopupCartOpen);
    const list = useSelector(state => state.cart.selected);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    let node = null;
    const setNodeRef = nodeRef => node = nodeRef;
    const closePopupCart = () => {
        dispatch(changePopupCartState(false));
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
    };
    const removeItem = id => dispatch(removeProduct(id));
    const increaseCountItem = id => dispatch(increaseCount(id));
    const decreaseCountItem = id => dispatch(decreaseCount(id));

    React.useEffect(() => {
        const onClickHandler = event => {
            const target = event.target;
            if (isOpen) {
                if (node.current.contains(target)) {
                    return;
                } else if (target.closest('.popup-cart-item__remove')) {
                    return;
                } else {
                    closePopupCart();
                }
            }
        };

        if (isOpen) {
            document.body.addEventListener('click', onClickHandler);
        }

        return () => {
            document.body.removeEventListener('click', onClickHandler);
        }
    }, [isOpen, list]);

    return (
        <PopupCart
            list={list}
            totalPrice={totalPrice}
            isOpen={isOpen}
            setNodeRef={setNodeRef}
            removeItem={removeItem}
            increaseCountItem={increaseCountItem}
            decreaseCountItem={decreaseCountItem}
            closePopupCart={closePopupCart}
        />
    )
}

export default PopupCartContainer

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { changePopupCartState } from '../../../redux/cart-reducer';
import PopupCart from './PopupCart';


const PopupCartContainer = () => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.cart.isPopupCartOpen);
    let node = null;
    const setNodeRef = nodeRef => node = nodeRef;

    React.useEffect(() => {
        const onClickHandler = event => {
            if (isOpen && node && !node.current.contains(event.target)) {
                dispatch(changePopupCartState(false));
                document.body.style.overflow = 'auto';
                document.body.style.paddingRight = '0';
            }
        };
        document.body.addEventListener('click', onClickHandler);
        return () => document.body.removeEventListener('click', onClickHandler);
    }, [isOpen]);

    return (
        <PopupCart
            isOpen={isOpen}
            setNodeRef={setNodeRef}
        />
    )
}

export default PopupCartContainer

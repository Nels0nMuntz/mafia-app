import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { changePopupCartState } from '../../../redux/cart-reducer';
import PopupCart from './PopupCart';


const PopupCartContainer = () => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.cart.isPopupCartOpen);
    const list = useSelector(state => state.cart.selected);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    let node = null;
    const setNodeRef = nodeRef => node = nodeRef;

    React.useEffect(() => {
        const onClickHandler = event => {
            console.log(!!event.target.closest(`.${node.current.className}`));
            if (isOpen && !event.target.closest(`.${node.current.className}`)){
                dispatch(changePopupCartState(false));
                document.body.style.overflow = 'auto';
                document.body.style.paddingRight = '0';
            }
        };
        if(isOpen){
            console.log('addEventListener');
            document.body.addEventListener('click', onClickHandler);
        }else{
            console.log('removeEventListener');
            document.body.removeEventListener('click', onClickHandler);
        }
        
        // return () => document.body.removeEventListener('click', onClickHandler);
    }, [isOpen]);

    return (
        <PopupCart
            list={list}
            totalPrice={totalPrice}
            isOpen={isOpen}
            setNodeRef={setNodeRef}
        />
    )
}

export default PopupCartContainer

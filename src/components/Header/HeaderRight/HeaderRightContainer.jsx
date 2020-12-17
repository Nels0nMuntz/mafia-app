import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import HeaderRight from './HeaderRight'
import { getScrollbar } from './../../../scrollbar/scrollbar';
import { changePopupCartState } from './../../../redux/cart-reducer'


const HeaderRightContainer = ({ categories }) => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.cart.isPopupCartOpen);
    const onClickCartIcon = React.useCallback(() => {
        if (!isOpen) {
            dispatch(changePopupCartState(true));
            getScrollbar(document.body);
            document.body.style.overflow = 'hidden';
        }
    }, []);

    return (
        <HeaderRight
            categories={categories}
            onClickCartIcon={onClickCartIcon}
        />
    )
};

export default HeaderRightContainer;

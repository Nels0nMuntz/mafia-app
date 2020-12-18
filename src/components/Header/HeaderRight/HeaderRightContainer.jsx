import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import HeaderRight from './HeaderRight'
import { getScrollbar } from './../../../scripts/scrollbar/scrollbar';
import { changePopupCartState } from './../../../redux/cart-reducer'


const HeaderRightContainer = ({ categories }) => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.cart.isPopupCartOpen);
    const totalCount = useSelector(state => state.cart.totalCount);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const onClickCartIcon = React.useCallback(() => {
        if (!isOpen && totalCount) {
            dispatch(changePopupCartState(true));
            getScrollbar(document.body);
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen, totalCount]);

    return (
        <HeaderRight
            categories={categories}
            onClickCartIcon={onClickCartIcon}
            totalCount={totalCount}
            totalPrice={totalPrice}
        />
    )
};

export default HeaderRightContainer;

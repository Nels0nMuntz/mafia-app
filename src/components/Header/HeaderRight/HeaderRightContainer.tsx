import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import HeaderRight from './HeaderRight'
import { getScrollbar } from '../../../scripts/scrollbar/scrollbar';
import { changePopupCartState } from '../../../redux/cart-reducer'
import { RootStateType } from '../../../redux/store'

type Props = {
    categories: CategoryType[]
};

const HeaderRightContainer: React.FC<Props> = ({ categories }) => {

    const dispatch = useDispatch();
    const isOpen: boolean = useSelector((state: RootStateType) => state.cart.isPopupCartOpen);
    const totalCount = useSelector((state: RootStateType) => state.cart.totalCount);
    const totalPrice = useSelector((state: RootStateType) => state.cart.totalPrice);

    const onClickCartIcon = React.useCallback(() => {
        if (!isOpen && totalCount) {
            dispatch(changePopupCartState(true));
            getScrollbar(document.body);
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen, totalCount, dispatch]);

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

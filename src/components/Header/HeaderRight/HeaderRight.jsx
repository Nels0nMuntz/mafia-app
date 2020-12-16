import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import style from './HeaderRight.module.scss'
import cartImg from '../../../assets/images/shopping-cart.svg'
import avatar from './../../../assets/images/avatar.svg'

import HeaderDropdown from './../../common/HeaderDropdown/HeaderDropdown';
import withBreakpoints from './../../HOC/withBreakpoints';
import { changePopupCartState } from '../../../redux/cart-reducer';
import { getScrollbar } from './../../../scrollbar/scrollbar';


const HeaderRight = ({ queryMatches }) => {

    const dispatch = useDispatch();
    const { md, lg } = { ...queryMatches };
    const categories = useSelector(state => state.header.categories);
    const isOpen = useSelector(state => state.cart.isPopupCartOpen);
    const onClickCartIcon = () => {
        if(!isOpen){
            dispatch(changePopupCartState(true));
            getScrollbar(document.body);
            document.body.style.overflow = 'hidden';
        }        
    };

    return (
        <div className={style.header_right_wrapper}>
            <ul className={style.header_right_list}>

                {
                    !md && (
                        <React.Fragment>
                            <li>
                                <HeaderDropdown
                                    title={categories.find(category => category.type === 'language').title}
                                    list={categories.find(category => category.type === 'language').list}
                                />
                            </li>
                            <li>
                                <Link>
                                    {lg ? (
                                        <img className={style.avatar_icon} src={avatar} alt="avatar" />
                                    ) : (
                                            <div>Вход</div>
                                        )}
                                </Link>
                            </li>
                        </React.Fragment>
                    )
                }
                <li>
                    <div
                        className={style.cart_wrapper}
                        onClick={onClickCartIcon}
                    >
                        <img className={style.cart_icon} src={cartImg} alt="cart" />
                        <span>0</span>
                        {md ? '' : 'Корзина'}
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default withBreakpoints(HeaderRight, {
    md: '(max-width: 720px)',
    lg: '(max-width: 1100px)',
});
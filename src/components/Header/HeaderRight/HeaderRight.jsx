import React from 'react';
import { Link } from 'react-router-dom';

import style from './HeaderRight.module.scss'
import cartImg from '../../../assets/images/shopping-cart.svg'
import avatar from './../../../assets/images/avatar.svg'

import HeaderDropdown from './../../common/HeaderDropdown/HeaderDropdown';
import withBreakpoints from './../../HOC/withBreakpoints';


const HeaderRight = React.memo(({ categories, onClickCartIcon, queryMatches }) => {
    
    const { md, lg } = { ...queryMatches };

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
});

export default withBreakpoints(HeaderRight, {
    md: '(max-width: 720px)',
    lg: '(max-width: 1100px)',
});
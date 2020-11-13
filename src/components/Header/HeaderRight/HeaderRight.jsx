import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './HeaderRight.module.scss'
import cartImg from '../../../assets/images/shopping-cart.svg'
import HeaderDropdown from './../../libs-components/HeaderDropdown/HeaderDropdown';

const HeaderRight = () => {

    const categories = useSelector(state => state.headerReducer.categories)

    return (
        <div className={style.header_right_wrapper}>
            <ul className={style.header_right_list}>
                <li>
                    <HeaderDropdown
                        title={categories.find(category => category.type === 'language').title}
                        list={categories.find(category => category.type === 'language').list}
                    />
                </li>
                <li>
                    <Link>
                        <div>Вход</div>
                    </Link>
                </li>
                <li>
                    <Link>
                        <div>
                            <img src={cartImg} alt="cart" />
                            <span>0</span>
                            Корзина
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderRight

import React from 'react';
import { Link } from 'react-router-dom';

import HeaderCategory from './../HeaderCategory';

import style from './HeaderRight.module.scss'

const HeaderRight = () => {
    return (
        <div className={style.header_right_wrapper}>
            <ul className={style.header_right_list}>
                <li>
                    <HeaderCategory />
                </li>
                <li>
                    <Link>
                        <span>Вход</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <span>Корзина</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderRight

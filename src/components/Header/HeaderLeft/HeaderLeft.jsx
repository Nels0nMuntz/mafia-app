import React from 'react'
import { Link } from 'react-router-dom';

import HeaderCategory from './../HeaderCategory';

import style from './HeaderLeft.module.scss'


const HeaderLeft = () => {
    return (
        <div className={style.header_left_wrapper}>
            <ul className={style.header_left_list}>
                <li>
                    <HeaderCategory />
                </li>
                <li>
                    <HeaderCategory />
                </li>
                <li>
                    <HeaderCategory />
                </li>
                <li>
                    <Link to='/'>
                        <div className={style.one_plus_one}>
                            Заберу сам 1+1
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderLeft

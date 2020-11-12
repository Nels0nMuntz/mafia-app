import React from 'react'

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
            </ul>
        </div>
    )
}

export default HeaderLeft
